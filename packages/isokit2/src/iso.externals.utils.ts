import '@babylonjs/loaders';
import { scene } from './globals';

export const showExternal = (id: string, show: boolean) => {
  const mesh = scene.meshes.find((mesh) => mesh.id === id);

  if (!mesh) {
    return;
  }

  mesh.setEnabled(show);
};

export const removeExternal = (id: string) => {
  const mesh = scene.meshes.find((mesh) => mesh.id === id);

  if (!mesh) {
    return;
  }

  mesh.dispose();
};
