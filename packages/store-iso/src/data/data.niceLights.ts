import { IIsoStore } from '../types.iso';

export const initialState: Partial<IIsoStore> = {
  sceneLights: {
    spotlight: {
      id: 'spotlight',
      type: 'spotlight',
      position: [0, 15, 0],
      target: [0.4, -1, 0],
      colors: {
        diffuse: [1, 1, 1],
        specular: [0, 1, 1],
      },
      values: {
        intensity: 1,
        exponent: 50,
        angle: 30,
      },
      isSticky: true,
    },
    directional: {
      id: 'directional',
      type: 'directional',
      target: [0.4, 0, 0],
      colors: {
        diffuse: [1, 0.1, 0.11],
        specular: [0, 1, 0.1],
      },
      values: {
        intensity: 10,
      },
      isSticky: true,
    },
    point: {
      id: 'point',
      type: 'point',
      position: [0, 10, 0],
      colors: {
        diffuse: [1, 0.1, 0.11],
        specular: [0, 1, 0.1],
      },
      values: {
        intensity: 10,
      },
      isSticky: true,
    },
  },
  sceneExternals: {
    tree: {
      id: 'tree',
      url: 'http://localhost:3000/scenes/park/tree.glb',
    },
  },
};
