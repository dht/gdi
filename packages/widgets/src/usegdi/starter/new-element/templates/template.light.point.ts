import { ILight } from '@gdi/store-iso';

export const template: ILight = {
  id: 'point-{uid4}',
  type: 'point',
  position: [0, 10, 0],
  colors: {
    diffuse: [1, 0.1, 0.11],
    specular: [0, 1, 0.1],
  },
  values: {
    intensity: 10,
  },
};
