import { Api } from '../../utils/api';
import { DEFAULT_VOICE, Voice, nameToIds } from './_config';
import { instance } from './_init';
import { upperFirst } from 'lodash';

type Model =
  | 'eleven_multilingual_v2'
  | 'eleven_multilingual_v1'
  | 'eleven_monolingual_v1'
  | 'eleven_turbo_v2'
  | 'eleven_english_sts_v2';

type Options = {
  voice: Voice;
  style: number; // 0-1 | exaggerate style
  model: Model;
  stability: number; // 0-1 | Low = broader emotional range
  similarity: number; // 0-1 | Low = broader emotional range
  boost: boolean;
  turbo: boolean;
};

export const speech = async (prompt: string, options: Partial<Options>) => {
  let {
    voice = DEFAULT_VOICE,
    style = 0,
    model = 'eleven_multilingual_v2',
    stability = 0,
    similarity = 0,
    boost = true,
    turbo = false,
  } = options;

  if (turbo) {
    model = 'eleven_turbo_v2';
  }

  const voiceId = nameToIds[voice];

  const inputCount = prompt.length;
  const inputRate = 0.22;

  const api = new Api(
    {
      method: 'post',
      url: `/text-to-speech/${voiceId}`,
      data: {
        text: prompt,
        model_id: model,

        voice_settings: {
          similarity_boost: similarity,
          stability: stability,
          style,
          use_speaker_boost: boost,
        },
      },
      responseType: 'arraybuffer',
      headers: {
        accept: 'audio/mpeg',
      },
    },
    {
      errorXpath: {
        code: 'detail.status',
        message: 'detail.message',
      },
    }
  );

  const response = await api.invoke(instance);

  return response
    .withCost({
      inputCount,
      inputRate,
      total: (inputCount * inputRate) / 1000,
    })
    .build();
};
