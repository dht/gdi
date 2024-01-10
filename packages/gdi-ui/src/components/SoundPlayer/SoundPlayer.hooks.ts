import { useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

type OnReady = (id: string, wavesurfer: WaveSurfer, duration: number) => void;

export const useWavesurfer = (
  id: string,
  containerRef: any,
  url: string,
  options: any,
  onReady: OnReady
) => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer>();
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      ...options,
      url,
      hideScrollbar: true,
      autoCenter: false,
      autoplay: true,
      fillParent: true,
      container: containerRef.current,
    });

    ws.once('ready', () => {
      onReady(id, ws, ws.getDuration());
    });

    const unlisten1 = ws.on('play', () => {
      setIsPlaying(true);
    });

    const unlisten2 = ws.on('pause', () => {
      setIsPlaying(false);
    });

    setWavesurfer(ws);

    return () => {
      unlisten1();
      unlisten2();
      ws.destroy();
    };
  }, [containerRef, url]);

  const toggle = () => {
    if (isPlaying) {
      wavesurfer?.pause();
    } else {
      wavesurfer?.play();
    }
  };

  return [isPlaying, { toggle }] as const;
};
