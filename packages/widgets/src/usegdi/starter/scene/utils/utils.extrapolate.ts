import { IDot, IVector } from '@gdi/store-iso';
import { get } from 'lodash';
import { createCubicBezier } from 'isokit2';

const LINEAR_EASING = [0.5, 0.5, 0.5, 0.5];

const fields: any = {
  position: 'vector3',
  rotation: 'vector3',
  scaling: 'vector3',
  alpha: 'float',
  beta: 'float',
  radius: 'float',
};

export const applyEasing = (v1: number, v2: number, easing: number[], percent: number) => {
  const fn = createCubicBezier(easing);
  return v1 + (v2 - v1) * fn(percent);
};

export const applyEasingVector = (v1: IVector, v2: IVector, easing: number[], percent: number) => {
  try {
    return [
      applyEasing(v1[0], v2[0], easing, percent),
      applyEasing(v1[1], v2[1], easing, percent),
      applyEasing(v1[2], v2[2], easing, percent),
    ];
  } catch (err) {
    return [0, 0, 0];
  }
};

export const extrapolateAnimation = (percent: number, startDot?: IDot, endDot?: IDot) => {
  const values: Json = {
    ...get(startDot, 'values'),
  };

  if (!startDot || !endDot) return values;

  const { values: source, easing = LINEAR_EASING } = startDot;
  const { values: dest } = endDot;

  for (let key in source) {
    const type = fields[key];

    switch (type) {
      case 'vector3':
        values[key] = applyEasingVector(source[key], dest[key], easing, percent);
        break;
      case 'float':
        values[key] = applyEasing(source[key], dest[key], easing, percent);
        break;
    }
  }

  return {
    id: '',
    bitId: '',
    virtualDotId: '',
    values: values,
  };
};
