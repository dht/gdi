import { createSelector } from 'reselect';
import { IFactoryStore } from './types';

export const $i = (state: IFactoryStore) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $rawFactoryState = createSelector($i, (state: IFactoryStore) => state.appStateFactory); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IFactoryStore) => state.currentIdsFactory); // prettier-ignore
export const $rawLayouts = createSelector($i, (state: IFactoryStore) => state.layouts); // prettier-ignore
export const $rawCustomBlocks = createSelector($i, (state: IFactoryStore) => state.customBlocks); // prettier-ignore
