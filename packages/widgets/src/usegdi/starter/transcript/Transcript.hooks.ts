import { useMemo } from 'react';
import { ISentence, ISpeaker } from './Transcript.types';

export function useSpeakers(sentences: ISentence[]) {
  const output = useMemo(() => {
    let id = 1;

    const speakers: Record<string, ISpeaker> = {};

    sentences.forEach((sentence) => {
      const { speakerName } = sentence;

      if (!speakers[speakerName]) {
        speakers[speakerName] = {
          id: id++,
          name: speakerName,
        };
      }
    });

    return speakers;
  }, [sentences]);

  return output;
}
