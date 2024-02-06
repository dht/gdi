import { IEnvironment } from '@gdi/store-iso';
import { defaultEnvironment } from 'isokit2';

export const environment: IEnvironment = {
  ...defaultEnvironment,
  hdr: true,
  createDefault: false,
  createSkybox: false,
  imageProcessing: {
    enabled: true,
    contrast: 1.2,
    exposure: 1,
  },
  grain: {
    enabled: true,
    intensity: 5,
    animated: true,
  },
};
