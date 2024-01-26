import { IIsoStore } from '@gdi/store-iso';

export const lights: Partial<IIsoStore> = {
  sceneLights: {
    d1: {
      id: 'd1',
      type: 'directional',
      position: [0, 0, 0],
      target: [1, 0, -1],
      colors: {
        diffuse: [1, 0.7, 0.6],
        specular: [0, 0, 0],
      },
      values: {
        intensity: 0.5,
      },
      isSticky: true,
    },
    d2: {
      id: 'd2',
      type: 'directional',
      target: [-1, 0, 0],
      colors: {
        diffuse: [1, 0.7, 0.8],
        specular: [1, 0, 0],
      },
      values: {
        intensity: 0.8,
      },
      isSticky: true,
    },
    point: {
      id: 'point',
      type: 'point',
      position: [0, 1, 0],
      colors: {
        diffuse: [1, 1, 1],
        specular: [0, 0, 0],
      },
      values: {
        intensity: 2,
      },
      isSticky: true,
    },
  },
  sceneExternals: {
    // frank: {
    //   id: 'frank',
    //   url: 'http://localhost:3000/glbs/frank.obj',
    // },
    // victoria: {
    //   id: 'victoria',
    //   url: 'http://localhost:3000/glbs/victoria.obj',
    // },
    // basic: {
    //   id: 'basic',
    //   url: 'http://localhost:3000/glbs/basic.glb',
    // },
    // vision: {
    //   id: 'vision',
    //   url: 'http://localhost:3000/glbs/vision.obj',
    // },
  },
};
