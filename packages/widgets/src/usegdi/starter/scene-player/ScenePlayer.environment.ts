import { IEnvironment } from '@gdi/store-iso';
import { defaultEnvironment } from 'isokit2';

export const environment: IEnvironment = {
  ...defaultEnvironment,
  hdr: true,
  createDefault: true,
  createSkybox: false,
  bloom: {
    enabled: true,
    kernel: 64,
    scale: 0.5,
    threshold: 0.9,
    weight: 0.15,
  },
  vignette: {
    enabled: true,
    stretch: 2,
    weight: 10,
    color: [1, 1, 1, 1],
  },
};
