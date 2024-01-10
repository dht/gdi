import { IMesh, ICreateCylinder } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateCylinder>;
};

export const template: Template = {
  id: 'cylinder-{uid4}',
  type: 'cylinder',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    height: 1,
    diameterTop: 0.5,
    diameterBottom: 0.5,
    tessellation: 24,
  },
};
