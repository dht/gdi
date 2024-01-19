import { guid4 } from 'shared-base';
import { speech } from '../_facade/speech';
import { Json } from '../../types';
import { saveToBucket } from '../files';

export const basic = async (req: any, api: Json, params: Json) => {
  const { prompt, promptParams } = params;
  const { voiceId = 'alloy', voiceProvider = 'OpenAI' } = promptParams ?? {};

  let isWorkflowSuccess = true,
    errorMessage: string = '',
    voiceUrl,
    total = 0;

  const response = await speech(prompt, {
    provider: voiceProvider,
    voice: voiceId,
  });

  const id = guid4();

  if (response.isSuccess) {
    const { data, cost, duration, durationText } = response;

    const meta = {
      id,
      source: 'generated',
      prompt,
      promptParams: { voiceProvider, voiceId },
      cost,
      workflowId: 'voice',
      duration,
      durationText,
    };

    try {
      voiceUrl = await saveToBucket(req, `speech/voice_${id}.mp3`, data, 'audio/mpeg', meta);
      total = cost.total;
      isWorkflowSuccess = true;
    } catch (err) {
      console.error('Error saving mp3 to bucket:', err);
    }
  }

  const changeVariables = {
    voiceUrl,
  };

  const changeNodeState = {
    status: isWorkflowSuccess ? 'done' : 'error',
    errorMessage,
    cost: {
      total,
    },
  };

  return [changeVariables, changeNodeState];
};
