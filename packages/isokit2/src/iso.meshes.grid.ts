import { showMesh } from './iso.meshes.utils';

export const showGrid = (show: boolean) => {
  showMesh('main-grid', show);
  showMesh('center', show);
};
