import { Json } from '../../../types';

export const pricing: Json = {
  gpt_4_turbo: {
    id: 'gpt_4_turbo',
    name: 'GPT-4 Turbo',
    modelIds: [],
    input: 0.01,
    output: 0.03,
  },
  gpt_4: {
    id: 'gpt_4',
    name: 'GPT-4',
    modelIds: ['gpt-4-0613'],
    input: 0.03,
    output: 0.06,
  },
  gpt_4_32k: {
    id: 'gpt_4_32k',
    name: 'GPT-4 32k',
    input: 0.06,
    output: 0.12,
  },
  gpt_3_5_turbo: {
    id: 'gpt_3_5_turbo',
    name: 'GPT-3.5 Turbo',
    modelIds: ['gpt-3.5-turbo-1106'],
    input: 0.001,
    output: 0.002,
  },
  gpt_3_5_instruct: {
    id: 'gpt_3_5_instruct',
    name: 'GPT-3.5 Turbo Instruct',
    input: 0.0015,
    output: 0.002,
  },
  dalle3: {
    id: 'dalle3',
    name: 'DALL-E 3',
    image: 0.04,
    imageLarge: 0.08,
  },
  dalle3_hd: {
    id: 'dalle3_hd',
    name: 'DALL-E 3 HD',
    image: 0.08,
    imageLarge: 0.12,
  },
  whisper: {
    id: 'whisper',
    name: 'Whisper',
    perMinute: 0.006,
  },
  tts_1: {
    id: 'tts_1',
    name: 'TTS',
    pricePer1KCharacter: 0.015,
    modelIds: ['tts-1-1106'],
  },
  tts_1_hd: {
    id: 'tts_1_hd',
    name: 'TTS HD',
    pricePer1KCharacter: 0.03,
    modelIds: ['tts-1--hd-1106'],
  },
};
