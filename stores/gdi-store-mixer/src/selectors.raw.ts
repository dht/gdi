import { createSelector } from 'reselect';
import { IMixerStore } from './types';

export const $i = (state: { mixer: IMixerStore }) => state.mixer;
const $n = (): null => null;
const $o = (): void => {};

export const $rawMeta = createSelector($i, (state: IMixerStore) => state.meta); // prettier-ignore
export const $rawMixerState = createSelector($i, (state: IMixerStore) => state.appStateMixer); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IMixerStore) => state.currentIds); // prettier-ignore
export const $rawLibraryImages = createSelector($i, (state: IMixerStore) => state.libraryImages); // prettier-ignore
export const $rawLibraryWidgets = createSelector($i, (state: IMixerStore) => state.libraryWidgets); // prettier-ignore
export const $rawLibraryTypography = createSelector($i, (state: IMixerStore) => state.libraryTypography); // prettier-ignore
export const $rawLibraryPalettes = createSelector($i, (state: IMixerStore) => state.libraryPalettes); // prettier-ignore
export const $rawLibraryPages = createSelector($i, (state: IMixerStore) => state.libraryPages); // prettier-ignore
export const $rawLibraryPageInstances = createSelector($i, (state: IMixerStore) => state.libraryPageInstances); // prettier-ignore
export const $rawInstances = createSelector($i, (state: IMixerStore) => state.libraryInstances); // prettier-ignore
export const $rawInstancesProps = createSelector($i, (state: IMixerStore) => state.libraryInstancesProps); // prettier-ignore
export const $rawLocales = createSelector($i, (state: IMixerStore) => state.locales); // prettier-ignore
export const $rawPackages = createSelector($i, (state: IMixerStore) => state.packages); // prettier-ignore
