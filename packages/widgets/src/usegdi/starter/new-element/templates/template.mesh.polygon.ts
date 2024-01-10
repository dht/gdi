import { IMesh, ICreatePolygon } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreatePolygon>;
};

export const template: Template = {
  id: 'polygon-{uid4}',
  type: 'polygon',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    shape: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    depth: 1,
  },
};
