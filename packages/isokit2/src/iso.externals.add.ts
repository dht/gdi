import { SceneLoader, SceneLoaderFlags } from '@babylonjs/core';
import { scene } from './globals';
import { IExternal } from '@gdi/store-iso';
import { applyMeshListeners, applyVectors, vector3 } from './iso.utils';
import '@babylonjs/loaders';
import { parseExternalUrl } from './utils/utils.url';
import { invokeEvent } from 'shared-base';

let loader: any;

export const initLoader = () => {
  SceneLoaderFlags.ShowLoadingScreen = false;

  SceneLoader.OnPluginActivatedObservable.addOnce((anyLoader: any) => {
    // This is just a precaution as this isn't strictly necessary since
    // the only loader in use is the glTF one.
    if (anyLoader.name !== 'gltf') return;

    loader = anyLoader;

    // See what the loader is doing in the console.
    loader.loggingEnabled = false;

    // Use HTTP range requests to load the glTF binary (GLB) in parts.
    loader.useRangeRequests = true;

    // Update the status text when loading is complete, i.e. when
    // all the LODs are loaded.
    loader.onCompleteObservable.add(() => {
      invokeEvent('scene/glb/ready');
    });
  });
};

export const addExternal = (external: IExternal, autoHide: boolean = false) => {
  const { id } = external;
  const { rootUrl, fileName } = parseExternalUrl(external);

  if (!rootUrl || !fileName) {
    return;
  }

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
    fileName,
    scene,
    function (event: any) {
      const { loaded, total } = event;

      if (loaded === total) {
      }
    }
  );

  return { meshes, animationGroups };
};

export const addRemoteSceneWithProgress = async (external: IExternal) => {
  const { rootUrl, fileName } = parseExternalUrl(external);

  const { meshes, animationGroups } = await SceneLoader.AppendAsync(
    rootUrl,
    fileName,
    scene,
    function (event: any) {}
  );

  return { meshes, animationGroups };
};

initLoader();
