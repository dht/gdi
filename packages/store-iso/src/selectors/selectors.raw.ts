import { createSelector } from 'reselect';
import { IIsoStore } from '../types.iso';

export const $i = (state: IIsoStore) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawSceneState = createSelector($i, (state: IIsoStore) =>state.sceneState); // prettier-ignore
export const $rawSceneConfig = createSelector($i, (state: IIsoStore) =>state.sceneConfig); // prettier-ignore
export const $rawSceneCurrentIds = createSelector($i, (state: IIsoStore) =>state.sceneCurrentIds); // prettier-ignore
export const $rawSceneAudios = createSelector($i, (state: IIsoStore) =>state.sceneAudios); // prettier-ignore
export const $rawSceneBits = createSelector($i, (state: IIsoStore) =>state.sceneBits); // prettier-ignore
export const $rawSceneCameras = createSelector($i, (state: IIsoStore) =>state.sceneCameras); // prettier-ignore
export const $rawSceneDots = createSelector($i, (state: IIsoStore) =>state.sceneDots); // prettier-ignore
export const $rawSceneExternals = createSelector($i, (state: IIsoStore) =>state.sceneExternals); // prettier-ignore
export const $rawSceneLights = createSelector($i, (state: IIsoStore) =>state.sceneLights); // prettier-ignore
export const $rawSceneMeshes = createSelector($i, (state: IIsoStore) =>state.sceneMeshes); // prettier-ignore
export const $rawSceneEffects = createSelector($i, (state: IIsoStore) =>state.sceneEffects); // prettier-ignore
export const $rawScenePacks = createSelector($i, (state: IIsoStore) =>state.scenePacks); // prettier-ignore
export const $rawSceneVASPs = createSelector($i, (state: IIsoStore) =>state.sceneVASPs); // prettier-ignore

// store-base
export const $rawAppState = createSelector($i, (state: any) =>state.appState); // prettier-ignore
