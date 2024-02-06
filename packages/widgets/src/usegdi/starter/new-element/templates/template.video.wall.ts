import { IMesh, ICreateDisc, ICreatePlane } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreatePlane>;
};

export const template: Template = {
  id: 'video-{uid4}',
  type: 'plane',
  position: [0, 0, 0],
  material: {
    type: 'video',
    colors: {
      specular: [0, 0, 0],
    },
    values: {
      url: '{asset-video}',
    },
  },
  values: {
    height: 5,
    width: 10,
  },
};
