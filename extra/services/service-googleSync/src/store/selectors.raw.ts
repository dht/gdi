import { createSelector } from 'reselect';
import { IGoogleSyncStore } from './types';

export const $i = (state: { googleSync: IGoogleSyncStore }) => state.googleSync;
const $n = (): null => null;
const $o = (): void => {};

export const $rawGoogleSyncState = createSelector($i, (state: IGoogleSyncStore) => state.appStateGoogleSync); // prettier-ignore
export const $rawGoogleSyncCategories = createSelector($i, (state: IGoogleSyncStore) => state.googleSyncCategories); // prettier-ignore
export const $rawBoosterScenes = createSelector($i, (state: IGoogleSyncStore) => state.boosterScenes); // prettier-ignore
