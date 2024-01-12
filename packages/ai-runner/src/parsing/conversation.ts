import { Json } from '../types';
import { conversationAddPhonetics, conversationSplitTranscript } from './conversation.utils';

export const $conversationSplitTranscript = (variables: Json) => {
  const { transcriptRaw } = variables;

  const messages = conversationSplitTranscript(transcriptRaw);

  return {
    transcriptLines: messages,
  };
};

export const $conversationAddPhonetics = (variables: Json) => {
  let { transcriptLines } = variables;

  transcriptLines = conversationAddPhonetics(transcriptLines, variables);

  return {
    transcriptLines,
  };
};
