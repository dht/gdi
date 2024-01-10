import { openai } from './_init';

export const whisper = async (file: File) => {
  const res = await openai.audio.transcriptions.create({
    model: 'whisper-1',
    file,
  });
};
