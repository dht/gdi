import { IMesh, ICreateDashedLines } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateDashedLines>;
};

export const template: Template = {
  id: 'dashedLines-{uid4}',
  type: 'dashedLines',
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
      [1, 1, 0],
    ],
    dashSize: 3,
    gapSize: 1,
    dashNb: 200,
  },
};
