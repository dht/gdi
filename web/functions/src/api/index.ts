import { Json } from '../types';
import * as elevenLabs from './elevenLabs';
import * as openAI from './openai';

export const api = {
  elevenLabs,
  openAI,
};

export const init = (keys: Json) => {
  elevenLabs.init(keys);
  openAI.init(keys);
};
