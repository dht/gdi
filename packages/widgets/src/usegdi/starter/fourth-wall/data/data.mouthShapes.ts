import { IDecal } from '@gdi/store-iso';

export const mouthShapes: IDecal[] = [
  {
    id: 'mouth-aie',
    position: [0.0205, 1.111, 0.0984],
    scaling: [0.1, 0.1, 0.1],
    values: {
      destinationMeshId: 'Newton_Headless_primitive0',
      normal: [-0.2328, 0.4642, 0.8545],
    },
    material: {
      id: 'mouth-aie-texture',
      type: 'texture',
      values: {
        textureUrl: '/glbs/mouth-set-1/mouth_a.png',
        hasAlpha: true,
        zOffset: -2,
      },
    },
  },
];
