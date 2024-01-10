import { IMesh, ICreatePolyhedron } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreatePolyhedron>;
};

export const template: Template = {
  id: 'polyhedron-{uid4}',
  type: 'polyhedron',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    sizeX: 1,
    sizeY: 2,
    sizeZ: 3,
  },
};
