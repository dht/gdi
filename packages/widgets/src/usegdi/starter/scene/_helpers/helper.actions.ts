import { actions } from '@gdi/store-iso';
import { get } from 'lodash';

export const actionsMap = {
  characters: {
    add: actions.sceneCharacters.add,
    patch: actions.sceneCharacters.patch,
    delete: actions.sceneCharacters.delete,
  },
  dynamics: {
    add: actions.sceneDynamics.add,
    patch: actions.sceneDynamics.patch,
    delete: actions.sceneDynamics.delete,
  },
  externals: {
    add: actions.sceneExternals.add,
    patch: actions.sceneExternals.patch,
    delete: actions.sceneExternals.delete,
  },
  lights: {
    add: actions.sceneLights.add,
    patch: actions.sceneLights.patch,
    delete: actions.sceneLights.delete,
  },
  meshes: {
    add: actions.sceneMeshes.add,
    patch: actions.sceneMeshes.patch,
    delete: actions.sceneMeshes.delete,
  },
  video: {
    add: actions.sceneMeshes.add,
    patch: actions.sceneMeshes.patch,
    delete: actions.sceneMeshes.delete,
  },
};

export const getAction = (elementType: string, verb: string) => {
  return get(actionsMap, [elementType, verb]);
};
