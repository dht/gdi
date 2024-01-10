import { IMesh, ICreateDisc, ICreateLathe } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateLathe>;
};

export const template: Template = {
  id: 'lathe-{uid4}',
  type: 'lathe',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    radius: 1,
    tessellation: 16,
    arc: 1,
    closed: false,
    sideOrientation: 0,
    cap: 0,
    shape: [
      [0.5, 0, 0],
      [0.5, 0.5, 0],
      [0.25, 0.75, 0],
      [0.25, 1, 0],
      [0.5, 1, 0],
      [0.5, 0.75, 0],
      [0.75, 0.5, 0],
      [0.75, 0, 0],
      [0.5, 0, 0],
    ],
  },
};
