import { createSelector } from 'reselect';
import { IMixerStore } from './types';

export const $i = (state: IMixerStore) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $rawMixerState = createSelector($i, (state: IMixerStore) => state.appStateMixer); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IMixerStore) => state.currentIds); // prettier-ignore
export const $rawMeta = createSelector($i, (state: IMixerStore) => state.meta); // prettier-ignore
export const $rawLocale = createSelector($i, (state: IMixerStore) => state.locale); // prettier-ignore
export const $rawPalette = createSelector($i, (state: IMixerStore) => state.palette); // prettier-ignore
export const $rawFontSizes = createSelector($i, (state: IMixerStore) => state.fontSizes); // prettier-ignore
export const $rawSpacing = createSelector($i, (state: IMixerStore) => state.spacing); // prettier-ignore
export const $rawFonts = createSelector($i, (state: IMixerStore) => state.fonts); // prettier-ignore
export const $rawInstances = createSelector($i, (state: IMixerStore) => state.instances); // prettier-ignore
export const $rawWidgets = createSelector($i, (state: IMixerStore) => state.widgets); // prettier-ignore
export const $rawInstancesMapColors = createSelector($i, (state: IMixerStore) => state.instancesMapColors); // prettier-ignore
export const $rawInstancesMapStrings = createSelector($i, (state: IMixerStore) => state.instancesMapStrings); // prettier-ignore
export const $rawInstancesProps = createSelector($i, (state: IMixerStore) => state.instancesProps); // prettier-ignore
export const $rawPages = createSelector($i, (state: IMixerStore) => state.pages); // prettier-ignore
export const $rawStrings = createSelector($i, (state: IMixerStore) => state.strings); // prettier-ignore
export const $rawLibrary = createSelector($i, (state: IMixerStore) => state.library); // prettier-ignore
export const $rawTypographyLibrary = createSelector($i, (state: IMixerStore) => state.typographyLibrary); // prettier-ignore
export const $rawPalettesLibrary = createSelector($i, (state: IMixerStore) => state.palettesLibrary); // prettier-ignore
export const $rawLocales = createSelector($i, (state: IMixerStore) => state.locales); // prettier-ignore
export const $rawPackages = createSelector($i, (state: IMixerStore) => state.packages); // prettier-ignore
