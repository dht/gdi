import { createSelector } from 'reselect';
import { IBibloStore } from './types';

export const $i = (state: { biblo: IBibloStore }) => state.biblo;
const $n = (): null => null;
const $o = (): void => {};

export const $rawBibloState = createSelector($i, (state: IBibloStore) => state.appStateBiblo); // prettier-ignore
export const $rawInterestingReads = createSelector($i, (state: IBibloStore) => state.interestingReads); // prettier-ignore
export const $rawReadCategories = createSelector($i, (state: IBibloStore) => state.readCategories); // prettier-ignore
