import { IMesh, ICreateDisc, ICreatePlane } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreatePlane>;
};

export const template: Template = {
  id: 'plane-{uid4}',
  type: 'plane',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    height: 5,
    width: 10,
  },
};
