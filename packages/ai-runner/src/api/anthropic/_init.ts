import Anthropic from '@anthropic-ai/sdk';
import { Json } from '../../types';

export let instance: Anthropic;

export const init = (keys: Json) => {
  const { anthropic } = keys;

  instance = new Anthropic({
    apiKey: anthropic,
  });
};
