import { SceneLoader } from '@babylonjs/core';
import { scene } from './globals';
import { IExternal } from '@gdi/store-iso';
import { applyMeshListeners, applyVectors, vector3 } from './iso.utils';
import '@babylonjs/loaders';

export const addExternal = (external: IExternal) => {
  const { id, url } = external;

  return new Promise((resolve) => {
    SceneLoader.ShowLoadingScreen = false;
    SceneLoader.Append('', url, scene, (ev: any) => {
      const mesh = scene.meshes.find((mesh) => mesh.id === '__root__');

      if (!mesh) {
        return;
      }

      mesh.id = id;
      mesh.setEnabled(false);
      applyMeshListeners(mesh as any, 'external');

      applyVectors(mesh as any, external as any);

      resolve(ev);
    });
  });
};
