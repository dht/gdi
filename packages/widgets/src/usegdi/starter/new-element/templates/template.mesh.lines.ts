import { IMesh, ICreateDisc, ICreateLines } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateLines>;
};

export const template: Template = {
  id: 'lines-{uid4}',
  type: 'lines',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    points: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
  },
};
