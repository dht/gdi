import { useEffect, useState } from 'react';
import { PlaybackInfo } from '../../Playback.types';

export function useStopwatch(playbackInfo: PlaybackInfo) {
  const { startTime, playbackStatus } = playbackInfo ?? {};
  const [value, setValue] = useState('00:00');

  useEffect(() => {
    if (playbackStatus === 'idle') {
      setValue('00:00');
      return;
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const minutes = Math.floor(elapsed / 1000 / 60);
      const seconds = Math.floor((elapsed / 1000) % 60);

      setValue(`${lz(minutes)}:${lz(seconds)}`);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [startTime, playbackStatus]);

  return value;
}

const lz = (n: number) => (n < 10 ? '0' + n : n);
