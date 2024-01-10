import { IPostEffect } from '@gdi/store-iso';
import { startColorCurve } from '../iso.environment';
import { applyValues } from './_helpers';
import { methods } from './_methods';
import { stepData } from './effects.chromatic.data';

const METHOD_ID = 'range';
const DEFAULT_DURATION = 3000;

const method = methods[METHOD_ID](stepData);

export const run = (t: number) => {
  return {};
};

export function onSetup() {
  startColorCurve();

  applyValues({
    'main.grainEnabled': true,
    'main.grain.intensity': 40,
    'main.grain.animated': true,
    'main.imageProcessing.colorCurvesEnabled': true,
    'main.imageProcessing.colorCurves.globalSaturation': -200,
    'main.imageProcessing.colorCurves.globalExposure': 0.5,
  });
}

export const runAndApply = (t: number) => {
  const values = run(t);
  applyValues(values);
};

export function onCleanup() {
  applyValues({
    'main.imageProcessing.colorCurvesEnabled': false,
    'main.grainEnabled': false,
  });
}

export const effect: IPostEffect = {
  id: 'oldFilm',
  name: 'Old film',
  defaultDuration: DEFAULT_DURATION,
  onSetup,
  runAndApply,
  onCleanup,
};
