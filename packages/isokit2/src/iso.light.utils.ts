import { HemisphericLight } from '@babylonjs/core';
import { ISunConfig } from '@gdi/store-iso';
import { scene } from './globals';
import { applyColors, getLight } from './iso.utils';

export const showLight = (id: string, show: boolean) => {
  const item = scene.lights.find((l) => l.id === id);

  if (!item) {
    return;
  }

  item.setEnabled(show);
};

export const removeLight = (id: string) => {
  const light = scene.lights.find((l) => l.id === id);

  if (!light) {
    return;
  }

  light.dispose();
};

export const configSun = (sunConfig: Partial<ISunConfig>) => {
  const { colors, intensity } = sunConfig;
  const sun = getLight('sun') as HemisphericLight;

  if (!sun) {
    return;
  }

  applyColors(colors, sun);
  sun.intensity = intensity ?? 1;
};
