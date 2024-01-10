import { Json } from '../types';
import { speech as speechOpenAI } from './openai';
import { speech as speechElevenLabs } from './elevenLabs';

export const speech = (api: Json, prompt: string, options: Json) => {
  const { vendor } = api;

  switch (vendor) {
    case 'openAI':
      return speechOpenAI.speech(prompt, options as any);
    case 'elevenLabs':
      return speechElevenLabs.speech(prompt, options);
    default:
      throw new Error(`Unknown vendor: ${vendor}`);
  }
};
