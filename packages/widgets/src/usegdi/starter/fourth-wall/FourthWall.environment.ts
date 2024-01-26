import { IEnvironment } from '@gdi/store-iso';
import { defaultEnvironment } from 'isokit2';

export const environment: IEnvironment = {
  ...defaultEnvironment,
  hdr: true,
  createDefault: false,
  createSkybox: false,
  imageProcessing: {
    enabled: true,
    contrast: 0.8,
    exposure: 1.2,
  },
  grain: {
    enabled: true,
    intensity: 5,
    animated: true,
  },
};
