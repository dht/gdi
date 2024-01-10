import { Json } from '../types';

export const getMaxId = (transcriptLines: Json) => {
  if (!transcriptLines || Object.values(transcriptLines).length === 0) {
    return 0;
  }

  const ids = Object.values(transcriptLines).map((i) => Number(i.id));
  return Math.max(...ids);
};
