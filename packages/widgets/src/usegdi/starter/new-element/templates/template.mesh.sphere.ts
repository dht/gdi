import { IMesh, ICreateSphere } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateSphere>;
};

export const template: Template = {
  id: 'sphere-{uid4}',
  type: 'sphere',
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
  },
};
