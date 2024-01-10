import { vector3 } from '../iso.utils';
import { applyValues } from './_helpers';
import { methods } from './_methods';
import { stepData } from './effects.chromatic.data';
import { IPostEffect } from '@gdi/store-iso';

const METHOD_ID = 'range';
const DEFAULT_DURATION = 1500;

const method = methods[METHOD_ID](stepData);

export const run = (t: number) => {
  const value = method(t);

  return {
    'main.chromaticAberration.aberrationAmount': value * Math.random() * 10,
  };
};

export function onSetup() {
  applyValues({
    'main.chromaticAberrationEnabled': true,
    'main.chromaticAberration.direction': vector3([30, 0, 0]),
    'main.chromaticAberration.aberrationAmount': 50,
  });
}

export const runAndApply = (t: number) => {
  const values = run(t);
  applyValues(values);
};

export function onCleanup() {
  applyValues({
    'main.chromaticAberrationEnabled': false,
  });
}

export const effect: IPostEffect = {
  id: 'chromatic',
  name: 'Chromatic Aberration',
  defaultDuration: DEFAULT_DURATION,
  onSetup,
  runAndApply,
  onCleanup,
};
