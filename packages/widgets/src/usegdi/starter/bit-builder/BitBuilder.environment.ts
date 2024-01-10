import { IEnvironment } from '@gdi/store-iso';
import { defaultEnvironment } from 'isokit2';

export const environment: IEnvironment = {
  ...defaultEnvironment,
  hdr: true,
  createDefault: true,
  createSkybox: true,
  skyboxIntensity: 2,
  imageProcessing: {
    enabled: true,
    contrast: 1.1,
    exposure: 0.9,
  },
  grain: {
    enabled: true,
    intensity: 5,
    animated: false,
  },
};
