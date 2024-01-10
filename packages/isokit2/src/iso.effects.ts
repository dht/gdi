import { pipeline } from './iso.environment';

const chromaticData = 



export const cameraFocus = (t: number) => {
  if (!pipeline || !pipeline.chromaticAberrationEnabled) return;
  pipeline.chromaticAberration.aberrationAmount = t;
};

export const postEffects = {
  chromatic,
};
