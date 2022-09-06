import { createSelector } from 'reselect';
import { ISiteStore } from './types';

export const $i = (state: ISiteStore) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $rawMeta = createSelector($i, (state: ISiteStore) => state.meta); // prettier-ignore
export const $rawLocale = createSelector($i, (state: ISiteStore) => state.locale); // prettier-ignore
export const $rawPages = createSelector($i, (state: ISiteStore) => state.pages); // prettier-ignore
export const $rawPalette = createSelector($i, (state: ISiteStore) => state.palette); // prettier-ignore
export const $rawFontSizes = createSelector($i, (state: ISiteStore) => state.fontSizes); // prettier-ignore
export const $rawSpacing = createSelector($i, (state: ISiteStore) => state.spacing); // prettier-ignore
export const $rawFonts = createSelector($i, (state: ISiteStore) => state.fonts); // prettier-ignore
export const $rawInstancesBlocks = createSelector($i, (state: ISiteStore) => state.instancesBlocks); // prettier-ignore
export const $rawImages = createSelector($i, (state: ISiteStore) => state.images); // prettier-ignore
export const $rawBlocks = createSelector($i, (state: ISiteStore) => state.blocks); // prettier-ignore
export const $rawInstancesMapColors = createSelector($i, (state: ISiteStore) => state.instancesMapColors); // prettier-ignore
export const $rawInstancesMapStrings = createSelector($i, (state: ISiteStore) => state.instancesMapStrings); // prettier-ignore
export const $rawInstancesProps = createSelector($i, (state: ISiteStore) => state.instancesProps); // prettier-ignore
export const $rawStrings = createSelector($i, (state: ISiteStore) => state.strings); // prettier-ignore
