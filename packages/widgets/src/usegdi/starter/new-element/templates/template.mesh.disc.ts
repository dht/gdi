import { IMesh, ICreateDisc } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateDisc>;
};

export const template: Template = {
  id: 'disc-{uid4}',
  type: 'disc',
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
    tessellation: 6,
  },
};
