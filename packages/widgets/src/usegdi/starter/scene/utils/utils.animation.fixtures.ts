export const dots: any[] = [
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
    id: 'dot_2_glb-66e7_start',
    bitId: 'bit-02',
    virtualDotId: 'start',
    meshId: 'glb-66e7',
    values: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scaling: [1, 1, 1],
    },
    easing: [0.3, 0.2, 0.7, 0.8],
  },
  {
    id: 'dot_2_glb-66e7_end',
    bitId: 'bit-02',
    virtualDotId: 'end',
    meshId: 'glb-66e7',
    values: {
      position: [0, 10, 0],
      rotation: [0, 180, 0],
      scaling: [2, 2, 2],
    },
  },
];
