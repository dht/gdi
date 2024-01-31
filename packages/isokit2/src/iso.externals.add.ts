import { SceneLoader } from '@babylonjs/core';
import { scene } from './globals';
import { IExternal } from '@gdi/store-iso';
import { applyMeshListeners, applyVectors, vector3 } from './iso.utils';
import '@babylonjs/loaders';
import { parseExternalUrl } from './utils/utils.url';

export const addExternal = (external: IExternal, autoHide: boolean = false) => {
  const { id } = external;
  const { rootUrl, fileName } = parseExternalUrl(external);

  return new Promise((resolve) => {
    SceneLoader.ShowLoadingScreen = false;
    SceneLoader.Append(rootUrl, fileName, scene, (ev: any) => {
      const mesh = scene.meshes.find((mesh) => mesh.id === '__root__');

      if (!mesh) {
        resolve(ev);
        return;
      }

      mesh.id = id;

      if (autoHide) {
        mesh.setEnabled(false);
      }

      applyMeshListeners(mesh as any, 'external');

      applyVectors(mesh as any, external as any);

      resolve(ev);
    });
  });
};

export const addRemoteMesh = (external: IExternal) => {
  const { meshNames = '' } = external;
  const { rootUrl, fileName } = parseExternalUrl(external);

  return new Promise((resolve) => {
    SceneLoader.ImportMesh(
      meshNames,
      rootUrl,
      fileName,
      scene,
      function (meshes, particleSystems, skeletons) {
        // Callback function

        resolve(meshes);

        // begin animation
        scene.beginAnimation(skeletons[0], 0, 100, true, 1.0);
      }
    );
  });
};

export const addRemoteScene = async (external: IExternal) => {
  const { meshNames = '' } = external;
  const { rootUrl, fileName } = parseExternalUrl(external);

  const { meshes, animationGroups } = await SceneLoader.ImportMeshAsync(
    meshNames,
    rootUrl,
    fileName
  );

  return { meshes, animationGroups };
};
