import { Json } from '../types';
import { chatSimple } from './chat.utils';

export const $chatSimple = (variables: Json) => {
  const transcriptLines = chatSimple(variables);

  return {
    transcriptLines,
  };
};
