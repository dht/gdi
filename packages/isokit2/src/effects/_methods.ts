import { createCubicBezier } from '../utils/utils.bezier';

export const methodStepRange = (params: any) => (t: number) => {
  let output = 0;

  Object.keys(params).forEach((key) => {
    const ranges = params[key];
    const range = ranges.find((r: number[]) => {
      const [start, end] = r;
      return t >= start && t < end;
    });

    if (range) {
      output = parseFloat(key);
    }
  });

  return output;
};

export const methodRandom = (_params: any) => (_t: number) => {
  return Math.random() > 0.5 ? 1 : 0;
};

export const methodEasing = (params: any) => {
  return createCubicBezier(params);
};

export const methods = {
  range: methodStepRange,
  random: methodRandom,
  easing: methodEasing,
};
