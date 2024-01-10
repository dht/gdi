import { IMesh, ICreateTorus } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateTorus>;
};

export const template: Template = {
  id: 'torus-{uid4}',
  type: 'torus',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    diameter: 5,
    thickness: 2,
  },
};
