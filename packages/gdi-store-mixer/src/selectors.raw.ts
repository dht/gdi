import { createSelector } from 'reselect';
import { IMixerStore } from './types';

export const $i = (state: IMixerStore) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $rawMeta = createSelector($i, (state: IMixerStore) => state.meta); // prettier-ignore
export const $rawMixerState = createSelector($i, (state: IMixerStore) => state.appStateMixer); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IMixerStore) => state.currentIds); // prettier-ignore
export const $rawLibraryImages = createSelector($i, (state: IMixerStore) => state.libraryImages); // prettier-ignore
export const $rawLibraryBlocks = createSelector($i, (state: IMixerStore) => state.libraryBlocks); // prettier-ignore
export const $rawLibraryTypography = createSelector($i, (state: IMixerStore) => state.libraryTypography); // prettier-ignore
export const $rawLibraryPalettes = createSelector($i, (state: IMixerStore) => state.libraryPalettes); // prettier-ignore
export const $rawLocales = createSelector($i, (state: IMixerStore) => state.locales); // prettier-ignore
export const $rawGalleryState = createSelector($i, (state: IMixerStore) => state.galleryState); // prettier-ignore
export const $rawPackages = createSelector($i, (state: IMixerStore) => state.packages); // prettier-ignore
