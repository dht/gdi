import { createSelector } from 'reselect';
import { IStudioStore } from './types';

export const $i = (state: { studio: IStudioStore }) =>
    state.studio ?? ({} as IStudioStore);

const $n = (): null => null;
const $o = (): void => {};

export const $rawStudioState = createSelector($i, (state: IStudioStore) => state.appStateStudio); // prettier-ignore
export const $rawStudioIds = createSelector($i, (state: IStudioStore) => state.currentIdsStudio); // prettier-ignore
export const $rawBoards = createSelector($i, (state: IStudioStore) => state.studioBoards); // prettier-ignore
export const $rawCameras = createSelector($i, (state: IStudioStore) => state.studioCameras); // prettier-ignore
export const $rawGrounds = createSelector($i, (state: IStudioStore) => state.studioGrounds); // prettier-ignore
export const $rawExternals = createSelector($i, (state: IStudioStore) => state.studioExternals); // prettier-ignore
export const $rawLights = createSelector($i, (state: IStudioStore) => state.studioLights); // prettier-ignore
export const $rawPacks = createSelector($i, (state: IStudioStore) => state.studioPacks); // prettier-ignore
export const $rawParticles = createSelector($i, (state: IStudioStore) => state.studioParticles); // prettier-ignore
export const $rawSounds = createSelector($i, (state: IStudioStore) => state.studioSounds); // prettier-ignore
export const $rawSprites = createSelector($i, (state: IStudioStore) => state.studioSprites); // prettier-ignore
export const $rawMicroAnimations = createSelector($i, (state: IStudioStore) => state.studioMicroAnimations); // prettier-ignore
export const $rawVideos = createSelector($i, (state: IStudioStore) => state.studioVideos); // prettier-ignore
