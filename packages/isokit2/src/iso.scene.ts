import { ISceneConfig } from '@gdi/store-iso';
import { scene } from './globals';
import { configArc, configFree } from './iso.camera';
import { configSun } from './iso.light.utils';
import { color4 } from './iso.utils';

export const applyConfig = (config: ISceneConfig) => {
  const { backgroundColor, cameras, sun } = config;

  if (backgroundColor) {
    scene.clearColor = color4(backgroundColor);
  }

  if (sun) {
    configSun(sun);
  }

  const { arc, free } = cameras ?? {};

  configArc(arc);
  configFree(free);
};
