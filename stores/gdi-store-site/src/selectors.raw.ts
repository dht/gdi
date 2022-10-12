import { createSelector } from 'reselect';
import { ISiteStore } from './types';

export const $i = (state: { site: ISiteStore }) => state.site;
const $n = (): null => null;
const $o = (): void => {};

export const $rawMeta = createSelector($i, (state: ISiteStore) => state.meta); // prettier-ignore
export const $rawBreakpoints = createSelector($i, (state: ISiteStore) => state.breakpoints); // prettier-ignore
export const $rawLocale = createSelector($i, (state: ISiteStore) => state.locale); // prettier-ignore
export const $rawPages = createSelector($i, (state: ISiteStore) => state.pages); // prettier-ignore
export const $rawPageInstances = createSelector($i, (state: ISiteStore) => state.pageInstances); // prettier-ignore
export const $rawPalette = createSelector($i, (state: ISiteStore) => state.palette); // prettier-ignore
export const $rawFonts = createSelector($i, (state: ISiteStore) => state.fonts); // prettier-ignore
export const $rawInstances = createSelector($i, (state: ISiteStore) => state.instances); // prettier-ignore
export const $rawImages = createSelector($i, (state: ISiteStore) => state.images); // prettier-ignore
export const $rawWidgets = createSelector($i, (state: ISiteStore) => state.widgets); // prettier-ignore
export const $rawInstancesProps = createSelector($i, (state: ISiteStore) => state.instancesProps); // prettier-ignore
