import { createSelector } from 'reselect';
import { IBlkrStore } from './types';

export const $i = (state: { blkr: IBlkrStore }) => state.blkr;
const $n = (): null => null;
const $o = (): void => {};

export const $rawBlkrState = createSelector($i, (state: IBlkrStore) => state.appStateBlkr); // prettier-ignore
export const $rawBlkrCategories = createSelector($i, (state: IBlkrStore) => state.blkrCategories); // prettier-ignore
export const $rawBoosterScenes = createSelector($i, (state: IBlkrStore) => state.boosterScenes); // prettier-ignore
