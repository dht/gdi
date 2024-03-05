import { IEnvironment } from '@gdi/store-iso';
import { defaultEnvironment } from 'isokit2';

export const environment: IEnvironment = {
  ...defaultEnvironment,
  hdr: false,
  createDefault: false,
  createSkybox: true,
};
