import { IMesh, ICreateCapsule } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateCapsule>;
};

export const template: Template = {
  id: 'capsule-{uid4}',
  type: 'capsule',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    height: 2,
    diameter: 1,
    tessellation: 16,
  },
};
