import { Json } from '../types';

export const seedEmptyAudio = (transcript: Json) => {
  const transcriptAudios: Json = {};

  for (let message of Object.values(transcript)) {
    const { id } = message;

    transcriptAudios[id] = {
      id,
      audioUrl: '',
      meta: {
        tsStart: 0,
        tsEnd: 0,
        duration: 0,
      },
    };
  }

  return {
    transcriptAudios,
  };
};
