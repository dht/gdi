import { AllEntities } from '@gdi/store-iso';

const SCENE_DURATION = 66;

export const entities: AllEntities = {
  allBits: [
    {
      id: 'bit-01',
      index: 1,
      name: 'bit-01',
      timestamp: 0,
      type: 'basic',
      duration: 0.1,
      start: 0,
      end: 0.1 * SCENE_DURATION,
      elements: {
        arc: false,
        box: true,
      },
    },
    {
      id: 'bit-02',
      index: 2,
      name: 'bit-02',
      timestamp: 0.1,
      type: 'basic',
      duration: 0.3,
      start: 0.1 * SCENE_DURATION,
      end: 0.4 * SCENE_DURATION,
      elements: {
        arc: true,
        free: false,
        box: false,
      },
    },
    {
      id: 'bit-03',
      index: 3,
      name: 'bit-03',
      timestamp: 0.4,
      type: 'basic',
      duration: 0.6,
      start: 0.4 * SCENE_DURATION,
      end: 1 * SCENE_DURATION,
      elements: {
        arc: false,
        free: true,
        box: true,
      },
    },
  ],
  allDots: [
    {
      id: 'dot_1_box_start',
      bitId: 'bit-01',
      virtualDotId: 'start',
      cameraId: 'arc',
      values: {
        position: [10, 10, 0],
        rotation: [0, 180, 0],
        scaling: [2, 2, 2],
      },
    },
    {
      id: 'dot_2_arc_start',
      bitId: 'bit-02',
      virtualDotId: 'start',
      cameraId: 'arc',
      values: {
        alpha: 45,
        beta: 60,
        radius: 20,
      },
      easing: [0.3, 0.2, 0.7, 0.8],
    },
    {
      id: 'dot_2_arc_end',
      bitId: 'bit-02',
      virtualDotId: 'end',
      cameraId: 'arc',
      values: {
        alpha: 15,
        beta: 60,
        radius: 30,
      },
    },
    {
      id: 'dot_2_box_start',
      bitId: 'bit-02',
      virtualDotId: 'start',
      meshId: 'box',
      values: {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scaling: [1, 1, 1],
      },
      easing: [0.3, 0.2, 0.7, 0.8],
    },
    {
      id: 'dot_2_box_end',
      bitId: 'bit-02',
      virtualDotId: 'end',
      meshId: 'box',
      values: {
        position: [0, 10, 0],
        rotation: [0, 180, 0],
        scaling: [2, 2, 2],
      },
    },
  ],
  allElements: [
    {
      id: 'box',
      type: 'mesh',
      subtype: 'box',
      label: 'Box',
      code: '',
      enabled: true,
      isVisible: true,
      item: {
        id: 'box',
        type: 'box',
        position: [0, 5, 0],
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
      },
    },
    {
      id: 'free',
      type: 'camera',
      subtype: 'free',
      label: 'Free Camera',
      code: '',
      enabled: true,
      isVisible: true,
      item: {
        id: 'free',
        position: [-32, 29, 24],
        target: [0, 0, 0],
        type: 'free',
        isSticky: true,
      },
    },
    {
      id: 'arc',
      type: 'camera',
      subtype: 'arc',
      label: 'Arc Camera',
      code: '',
      enabled: true,
      isVisible: true,
      item: {
        id: 'arc',
        type: 'arc',
        position: [0, 0, 0],
        target: [0, 0, 0],
        values: {
          alpha: 130,
          beta: 60,
          radius: 50,
        },
        isSticky: true,
      },
    },
  ],
};
