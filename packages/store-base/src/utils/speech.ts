export const getSpeechUrl = (storageUrl: string, transcriptId: string, lineIndex: number) => {
  return `${storageUrl}/boards/C-005/setups/physics/line-${lineIndex}.mp3`;
};
