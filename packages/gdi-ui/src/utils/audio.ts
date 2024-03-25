import { Sfx, sfxIds } from './audio.data';

const cache: Record<string, HTMLAudioElement> = {};
let assetsRoot = '',
  sfxEnabled = true;

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

export const playSound = (audioUrl: string, options?: PlayOptions): Promise<PlayAudioResponse> => {
  return playBase({ url: audioUrl, isAmbience: false, ...options });
};

export const playSfxByUrl = (
  assetPath: string,
  options?: PlayOptions
): Promise<PlayAudioResponse> => {
  if (!sfxEnabled) {
    console.log('Sfx disabled');
    return Promise.resolve({} as any);
  }

  return playSound(`${assetsRoot}/${assetPath}`, options);
};

export const playSfx = (id: Sfx, options?: PlayOptions): Promise<PlayAudioResponse> => {
  const path = sfxIds[id];

  if (!path) {
    console.log('No path for sfx id', id);
    return Promise.resolve({} as any);
  }

  return playSfxByUrl(path, options);
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
  url?: string;
  id?: string;
  isAmbience?: boolean;
  balance?: number;
};

export const playBase = (options: PlayOptions): Promise<PlayAudioResponse> => {
  const { url, id = url, isAmbience, balance = 0 } = options;

  return new Promise((resolve) => {
    console.log('url ->', url);

    const audio = cache[id ?? ''] || new Audio(url);
    cache[id ?? ''] = audio;

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
