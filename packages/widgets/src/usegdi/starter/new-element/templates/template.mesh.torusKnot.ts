import { IMesh, ICreateDisc, ICreateTorusKnot } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateTorusKnot>;
};

export const template: Template = {
  id: 'torusKnot-{uid4}',
  type: 'torusKnot',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    radius: 5,
    p: 2,
    q: 3,
  },
};
