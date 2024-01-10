import { ILight } from '@gdi/store-iso';

export const template: ILight = {
  id: 'spotlight-{uid4}',
  type: 'spotlight',
  position: [0, 15, 0],
  target: [0.4, -1, 0],
  colors: {
    diffuse: [1, 1, 1],
    specular: [0, 1, 1],
  },
  values: {
    intensity: 1,
    exponent: 50,
    angle: 30,
  },
};
