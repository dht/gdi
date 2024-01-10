import { guid4 } from 'shared-base';
import { seedEmptyAudio } from '../../data/empty.audio';
import { Json } from '../../types';
import db from '../../db';
import { RateLimitApi } from '../../utils/queue';
import { speech } from '../facade';
import { saveToBucket } from '../files';

const MAX_CONCURRENT_SPEECH_REQUESTS = 5; // creator plan

export const conversation = async (req: any, api: Json, params: Json) => {
  const { transcript } = params;

  const queue = new RateLimitApi(MAX_CONCURRENT_SPEECH_REQUESTS);
  let isWorkflowSuccess = true,
    errorMessage: string = '';

  const initial = seedEmptyAudio(transcript);
  // await db.variables.patch(req, initial);

  for (let message of Object.values(transcript)) {
    let audioId = guid4();

    queue.add(async () => {
      const { id, speakerName, text } = message as Json;

      // const speechMethod =

      const response = await speech(api, text, {
        voice: speakerName,
      });

      let { isSuccess = false } = response;

      let url = '',
        cost = 0;

      if (isSuccess) {
        try {
          url = await saveToBucket(req, `speech/${audioId}.mp3`, response.data, 'audio/mp3');
        } catch (err) {
          console.error('Error saving audio to bucket:', err);
          isSuccess = false;
        }

        cost = response.cost.total;
      } else {
        audioId = '';
        errorMessage = response.meta.errorCode || errorMessage;
      }

      isWorkflowSuccess = isWorkflowSuccess && isSuccess;

      return {
        id,
        audioId,
        audioUrl: url,
        cost,
        isSuccess,
        meta: response.meta,
      };
    });
  }

  const transcriptAudios: any = await queue.run();

  const transcriptAudioTotalCost = Object.values(transcriptAudios).reduce(
    (acc: number, item: any) => {
      const { cost = 0 } = item;
      return acc + cost;
    },
    0
  );

  const changeVariables = {
    transcriptAudios,
  };

  const changeNodeState = {
    status: isWorkflowSuccess ? 'done' : 'error',
    errorMessage,
    cost: {
      total: transcriptAudioTotalCost,
    },
  };

  return [changeVariables, changeNodeState];
};
