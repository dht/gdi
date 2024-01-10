import { IMesh, ICreateBox } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateBox>;
};

export const template: Template = {
  id: 'box-{uid4}',
  type: 'box',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    width: 1,
    height: 1,
    depth: 1,
  },
};
