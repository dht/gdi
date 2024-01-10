import type { ITranscriptLine } from '@gdi/store-base';

export const findCurrentLineIndex = (lines: ITranscriptLine[], currentTime: number) => {
  const index = lines.findIndex((line) => {
    const { timestamp = 0 } = line;

    return timestamp > currentTime;
  });

  if (index === -1) {
    return lines.length - 1;
  }

  return index - 1;
};
