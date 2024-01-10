import { Json } from '../types';

const getMaxId = (transcriptLines: Json) => {
  if (!transcriptLines || Object.values(transcriptLines).length === 0) {
    return 0;
  }

  const ids = Object.values(transcriptLines).map((i) => Number(i.id));
  return Math.max(...ids);
};

export const chatSimple = (variables: Json) => {
  let { prompt, transcriptLines, transcriptRaw } = variables;

  if (!transcriptLines) {
    transcriptLines = {};
  }

  let nextId: number = getMaxId(transcriptLines) + 1;

  transcriptLines[nextId] = {
    id: nextId,
    index: nextId - 1,
    speakerName: 'user',
    text: prompt,
  };

  nextId++;

  transcriptLines[nextId] = {
    id: String(nextId),
    index: nextId - 1,
    speakerName: 'assistant',
    text: transcriptRaw,
  };

  return transcriptLines;
};
