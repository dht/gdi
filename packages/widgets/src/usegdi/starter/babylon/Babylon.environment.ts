import { IEnvironment } from '@gdi/store-iso';
import { defaultEnvironment } from 'isokit2';

export const environment: IEnvironment = {
  ...defaultEnvironment,
  imageProcessing: {
    enabled: true,
    contrast: 1.1,
    exposure: 0.9,
  },
};
