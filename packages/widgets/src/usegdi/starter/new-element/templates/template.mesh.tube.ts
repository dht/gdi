import { IMesh, ICreateTube } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateTube>;
};

export const template: Template = {
  id: 'tube-{uid4}',
  type: 'tube',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    path: [
      [-10, 0, 0],
      [10, 0, 0],
    ],
    radius: 1,
    tessellation: 6,
  },
};
