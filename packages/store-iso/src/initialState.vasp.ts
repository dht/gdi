import { IDots, IVASPs } from './types.iso';

export const vasps: IVASPs = {
  'p1-woman-red': {
    id: 'p1-woman-red',
    identifier: 'mbp.svg',
    vaspType: 'sprite',
    values: {
      size: {
        width: 0.684,
        height: 2.394,
      },
      source: {
        width: 114,
        height: 399,
      },
      isOnGround: true,
    },
    packId: 'p1-woman-red',
    position: [11, 0, -3.9],
    index: 22,
  },
  ma: {
    id: 'ma',
    identifier: 'ma-bird',
    vaspType: 'microAnimation',
    url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/sprites/bird-1.png',
    values: {
      size: 2,
      toFrame: 3,
      cellSize: 289,
      fromFrame: 0,
      boardId: 'ville',
      loop: true,
      capacity: 1,
      delay: 6000,
    },
    position: [5.7, 5.4, -10.3],
    index: 0,
  },
  v1: {
    id: 'v1',
    vaspType: 'video',
    identifier: 'video-water',
    url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/videos/water-2.mp4',
    type: 'sphere',
    values: {
      diameterX: 9.3,
      diameterY: 9.3,
      diameterZ: 0,
    },
    material: {
      type: 'color',
      colors: {
        specular: [0, 0, 0],
      },
    },
    position: [15.9, 0.5, -8.57],
    rotation: [90, 0, 0],
    index: 1,
  },
  p1: {
    id: 'p1',
    vaspType: 'particle',
    identifier: 'particle-1',
    url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/sprites/smoke.png',
    position: [9, 0, -3.9],
    values: {
      size: 1,
      speed: 1,
      emitRate: 10,
      maxLifeTime: 16,
    },
    index: 0,
  },
};
