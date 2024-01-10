import { applyValues } from './_helpers';
import { methods } from './_methods';
import { stepData } from './effects.chromatic.data';
import { IPostEffect } from '@gdi/store-iso';

const METHOD_ID = 'easing';
const DEFAULT_DURATION = 3000;

const method = methods[METHOD_ID]([0.25, 0.1, 0.25, 1]);

export const run = (t: number) => {
  const value = method(t);

  return {
    'main.depthOfField.blurLevel': 1 - value,
  };
};

export function onSetup() {
  applyValues({
    'main.depthOfFieldEnabled': true,
    'main.depthOfField.blurLevel': 50,
  });
}

export const runAndApply = (t: number) => {
  const values = run(t);
  applyValues(values);
};

export function onCleanup() {
  applyValues({
    'main.depthOfFieldEnabled': false,
  });
}

export const effect: IPostEffect = {
  id: 'blur',
  name: 'Camera Blur',
  defaultDuration: DEFAULT_DURATION,
  onSetup,
  runAndApply,
  onCleanup,
};
