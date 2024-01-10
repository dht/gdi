import { IPostEffect } from '@gdi/store-iso';
import { effect as effectBlur } from './effects.blur';
import { effect as effectChromatic } from './effects.chromatic';
import { effect as effectDistortion } from './effects.distortion';
import { effect as effectOldFilm } from './effects.oldFilm';

export const effects: Record<string, IPostEffect> = {
  blur: effectBlur,
  chromatic: effectChromatic,
  distortion: effectDistortion,
  oldFilm: effectOldFilm,
};

export const effectIds = Object.keys(effects);
