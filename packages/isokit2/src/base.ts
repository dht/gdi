const baseItems = ['main-grid', 'center', 'env'];
const baseCameras = ['free', 'arc'];
const baseLights = ['sun'];
const baseEnv = [
  'BackgroundHelper',
  'BackgroundSkybox',
  'skyboxMesh',
  'stageMesh',
  'stage-maskMesh',
  'weather',
  'Ch37',
];
const baseAll = [...baseItems, ...baseCameras, ...baseLights, ...baseEnv];

export const base = {
  items: baseItems,
  cameras: baseCameras,
  lights: baseLights,
  all: baseAll,
};
