import { IPostEffect } from '@gdi/store-iso';
import { allPipes, startLensProcessing, stopLensProcessing } from '../iso.environment';
import { methods } from './_methods';

const METHOD_ID = 'easing';
const DEFAULT_DURATION = 1500;

const method = methods[METHOD_ID]([0.25, 0.1, 0.25, 1]);

export const run = (t: number) => {
  const value = method(t);
  return value * Math.random() * 10;
};

export function onSetup() {
  startLensProcessing();

  allPipes.lens.setEdgeDistortion(0);
}

export const runAndApply = (t: number) => {
  const value = run(t);
  allPipes.lens.setEdgeDistortion(value);
};

export function onCleanup() {
  stopLensProcessing();
}

export const effect: IPostEffect = {
  id: 'distortion',
  name: 'Camera Distortion',
  defaultDuration: DEFAULT_DURATION,
  onSetup,
  runAndApply,
  onCleanup,
};
