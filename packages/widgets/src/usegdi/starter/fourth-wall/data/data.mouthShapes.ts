import { IDecal } from '@gdi/store-iso';

export const mouthShapes: IDecal[] = [
  {
    id: 'mouth-aie',
    position: [9.862, -0.185, -0.434],
    scaling: [0.04, 0.04, 0.04],
    values: {
      normal: [-0.135, 0, 0.1833],
    },
    material: {
      id: 'mouth-aie-texture',
      type: 'texture',
      values: {
        textureUrl: '/boards/assets/mouth-set-1/mouth_a.png',
        hasAlpha: true,
        zOffset: -2,
      },
    },
  },
];
