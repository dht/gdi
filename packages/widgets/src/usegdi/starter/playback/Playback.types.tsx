export type PlaybackInfo = {
  prompt?: string;
  flavour: string;
  startTime: number;
  playbackSpeed: number;
  playbackStatus: 'idle' | 'playing';
};
