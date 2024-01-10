import { IMesh, ICreateGoldberg } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateGoldberg>;
};

export const template: Template = {
  id: 'goldberg-{uid4}',
  type: 'goldberg',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    size: 1,
  },
};
