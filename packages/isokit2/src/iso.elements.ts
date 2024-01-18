import {
  ICamera,
  IElement,
  IExternal,
  IIsoStore,
  ILight,
  IMesh,
  IPack,
  IVASP,
} from '@gdi/store-iso';
import { initCamera } from './iso.camera';
import { addExternal } from './iso.externals.add';
import { removeExternal } from './iso.externals.utils';
import { addLight } from './iso.light.add';
import { removeLight } from './iso.light.utils';
import { addMesh } from './iso.meshes.add';
import { applyKeyframe } from './iso.utils';
import { base } from './base';
import { addVASP } from './iso.vasps';
import { addPack } from './iso.sprites';
import { removeMesh } from './iso.meshes.utils';

type Options = {
  hideBase?: boolean;
  autoHideExternals?: boolean;
};

export const addElements = (elements: Partial<IIsoStore>, options: Options = {}) => {
  const { sceneCameras, sceneMeshes, sceneLights, sceneExternals, sceneVASPs, scenePacks } =
    elements;
  const { hideBase, autoHideExternals } = options;

  let item;

  try {
    for (item of Object.values(sceneCameras ?? {})) {
      initCamera(item as ICamera);
    }

    for (item of Object.values(sceneLights ?? {})) {
      addLight(item as ILight);
    }

    for (item of Object.values(sceneMeshes ?? {})) {
      const mesh = addMesh(item as IMesh);

      if (hideBase && base.items.includes(item.id)) {
        mesh.setEnabled(false);
      }
    }

    for (item of Object.values(sceneExternals ?? {})) {
      addExternal(item as IExternal, autoHideExternals);
    }

    for (item of Object.values(scenePacks ?? {})) {
      addPack(item as IPack);
    }

    for (item of Object.values(sceneVASPs ?? {})) {
      addVASP(item as IVASP);
    }
  } catch (err) {
    console.log('err =>', err);
  }
};

export const addElement = (element: IElement | IExternal, type: string, replace?: boolean) => {
  switch (type) {
    case 'light':
      removeLight(element.id);
      addLight(element as ILight);
      break;
    case 'mesh':
      removeMesh(element.id);
      addMesh(element as IMesh);
      break;
    case 'external':
      removeExternal(element.id);
      addExternal(element as IExternal);
      break;
  }
};

export const applyCurrentKeyframe = (element: IElement) => {
  const { id, currentKeyframe } = element;

  if (!currentKeyframe) {
    return;
  }

  applyKeyframe(id, currentKeyframe);
};

export const applyCurrentKeyframes = (elements: IElement[], ignoreCameras: true) => {
  for (let element of elements) {
    if (ignoreCameras && element.type === 'camera') {
      continue;
    }
    applyCurrentKeyframe(element);
  }
};
