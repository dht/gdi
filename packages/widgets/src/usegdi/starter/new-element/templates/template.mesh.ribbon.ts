import { IMesh, ICreateRibbon } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateRibbon>;
};

export const template: Template = {
  id: 'ribbon-{uid4}',
  type: 'ribbon',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    pathArray: [
      [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
    ],
    closeArray: false,
    sideOrientation: 0,
  },
};
