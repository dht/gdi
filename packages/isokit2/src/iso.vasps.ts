import { IVASP, VASPType } from '@gdi/store-iso';
import { addMicroAnimation } from './iso.ma';
import { addParticle } from './iso.particles';
import { addSprite } from './iso.sprites';
import { addVideo } from './iso.videos';

const map: Record<VASPType, any> = {
  microAnimation: addMicroAnimation,
  particle: addParticle,
  sprite: addSprite,
  video: addVideo,
};

export const addVASP = (item: IVASP) => {
  const { vaspType } = item;
  const method = (map as any)[vaspType];

  if (!method) {
    throw new Error(`VASP type '${vaspType}' not supported.`);
  }

  return method(item);
};
