import OpenAI from 'openai';
import { Json } from '../../types';

export let openai: OpenAI;

export const init = (keys: Json) => {
  const { openAI } = keys;

  openai = new OpenAI({
    apiKey: openAI,
  });
};
