export type Info = {
  id: string;
  values: Values;
  sampled: Values;
  from: Values;
  to: Values;
};

export type Values = {
  position?: number[];
  rotation?: number[];
  alpha?: number;
  beta?: number;
  radius?: number;
  ts: number;
};

export const infos: Record<string, Info> = {
  free: {
    id: 'free',
    values: {
      ts: 0,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    sampled: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      ts: 0,
    },
    from: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      ts: 0,
    },
    to: {
      position: [1.21, 0, 0],
      rotation: [0, 1.2241, 0],
      ts: 0,
    },
  },
};
