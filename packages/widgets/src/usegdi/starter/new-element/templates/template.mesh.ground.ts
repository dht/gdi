import { IMesh, ICreateGround } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateGround>;
};

export const template: Template = {
  id: 'ground-{uid4}',
  type: 'ground',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    width: 1,
    height: 1,
    subdivisions: 1,
  },
};
