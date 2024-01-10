import { ILight } from '@gdi/store-iso';

export const template: ILight = {
  id: 'directional-{uid4}',
  type: 'directional',
  target: [0.4, 0, 0],
  colors: {
    diffuse: [1, 0.1, 0.11],
    specular: [0, 1, 0.1],
  },
  values: {
    intensity: 10,
  },
};
