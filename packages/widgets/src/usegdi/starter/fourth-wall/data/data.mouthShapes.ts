import { IDecal } from '@gdi/store-iso';

export const mouthShapes: IDecal[] = [
  {
    id: 'mouth_a_1',
    position: [10.02, -0.62, 1.47],
    scaling: [0.0625, 0.0625, 0.25],
    values: {
      normal: [19.55, 3.74, -53.72],
      destinationMeshId: 'Ch37',
      cullBackFaces: true,
      localMode: true,
      angle: 0,
    },
    material: {
      id: 'mouth-e-texture_1',
      type: 'texture',
      values: {
        textureUrl: '/boards/assets/mouth-set-4/mouth_th.png',
        hasAlpha: true,
        zOffset: -3,
      },
    },
  },
  {
    id: 'mouth_a',
    position: [9.85, -0.18, -0.43],
    scaling: [0.0625, 0.0625, 0.25],
    values: {
      normal: [-57.21, 0.75, 2.99],
      destinationMeshId: 'Ch36',
      cullBackFaces: true,
      localMode: true,
      angle: 0,
    },
    material: {
      id: 'mouth-aie-texture',
      type: 'texture',
      values: {
        textureUrl: '/boards/assets/mouth-set-4/mouth_th.png',
        hasAlpha: true,
        zOffset: -3,
      },
    },
  },
];
