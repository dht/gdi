import { IIsoStore, IMesh, IMeshes } from '@gdi/store-iso';

export const elements: IIsoStore = {
  sceneMeshes: {
    s1: {
      id: 's1',
      type: 'sphere',
      position: [2, 2, 2],
      material: {
        id: 's1-mat',
        type: 'color',
        colors: {
          emissive: [0, 0, 0],
        },
      },
    },
    s1a: {
      id: 's1a',
      type: 'sphere',
      position: [2, 2, 2],
      material: {
        id: 's1-mat',
        type: 'color',
        colors: {
          emissive: [0, 0, 0],
        },
      },
      values: {
        diameter: 2,
      },
    },
    s2: {
      id: 's2',
      type: 'sphere',
      position: [-2, 2, -2],
      material: {
        id: 's2-mat',
        type: 'standard',
        colors: {
          emissive: [1, 0, 1],
        },
      },
    },
    s3: {
      id: 's3',
      type: 'sphere',
      position: [-2, 12, -2],
      material: {
        id: 's3-mat',
        type: 'standard',
        colors: {
          emissive: [1, 0, 1],
        },
      },
    },
    s4: {
      id: 's4',
      type: 'sphere',
      position: [-4, 5, -2],
      material: {
        id: 's3-mat',
        type: 'standard',
        colors: {
          emissive: [1, 0, 1],
        },
      },
    },
  },
  sceneLights: {
    point: {
      id: 'point',
      type: 'point',
      position: [50, 200, 0],
      colors: {},
      values: {},
      isSticky: true,
    },
  },
};

export const connectors = [
  {
    id: 'c1',
    sourceId: 's1',
    targetId: 's2',
  },
  {
    id: 'c2',
    sourceId: 's2',
    targetId: 's3',
  },
  {
    id: 'c3',
    sourceId: 's3',
    targetId: 's4',
  },
];
