import { Sfx, sfxIds } from './audio.data';

const cache: Record<string, HTMLAudioElement> = {};
let assetsRoot = '',
  sfxEnabled = false;

export type PlayAudioResponse = {
  audio: HTMLAudioElement;
  duration: number;
};

let currentAudio: HTMLAudioElement;

export const setAssetsRoot = (root: string) => {
  assetsRoot = root;
};

export const initSfx = (allowSfx: boolean) => {
  sfxEnabled = allowSfx;
};

export const stopAllSounds = () => {
  for (let key in cache) {
    cache[key].pause();
    cache[key].currentTime = 0;
  }
};

export const stopSound = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
};

export const playAmbience = (id: string, audioUrl: string): Promise<PlayAudioResponse> => {
  return playBase({ id, url: audioUrl, isAmbience: true });
};

export const cacheAmbience = (id: string, audioUrl: string) => {
  cache[id] = new Audio(audioUrl);
};

export const playSound = (audioUrl: string): Promise<PlayAudioResponse> => {
  return playBase({ url: audioUrl, isAmbience: false });
};

export const playSfxByUrl = (assetPath: string): Promise<PlayAudioResponse> => {
  if (!sfxEnabled) {
    return Promise.resolve({} as any);
  }

  return playSound(`${assetsRoot}/${assetPath}`);
};

export const playSfx = (id: Sfx): Promise<PlayAudioResponse> => {
  const path = sfxIds[id];

  if (!path) {
    return Promise.resolve({} as any);
  }

  return playSfxByUrl(path);
};

export const cacheSound = (audioUrl: string) => {
  cache[audioUrl] = new Audio(audioUrl);
};

export const stopAmbience = (id: string) => {
  if (!cache[id]) {
    return;
  }

  cache[id].pause();
  cache[id].currentTime = 0;
};

type PlayOptions = {
  url: string;
  id?: string;
  isAmbience?: boolean;
};

export const playBase = (options: PlayOptions): Promise<PlayAudioResponse> => {
  const { url, id = url, isAmbience } = options;

  return new Promise((resolve) => {
    const audio = cache[id] || new Audio(url);
    cache[id] = audio;

    if (isAmbience) {
      audio.loop = true;
    } else {
      currentAudio = audio;
    }

    audio.play();

    audio.addEventListener(
      'canplaythrough',
      function () {
        setTimeout(() => {
          let duration = audio.duration * 1000;

          // if infinity duration then set to 10 seconds

          if (duration === Infinity) {
            duration = 10000;
          }

          resolve({
            audio,
            duration,
          });
        }, 100);
      },
      false
    );
  });
};
