import { createSelector } from 'reselect';
import { IDevtoolsStore } from './types';

export const $i = (state: { devtools: IDevtoolsStore }) => state.devtools;
const $n = (): null => null;
const $o = (): void => {};

export const $rawDevtoolsState = createSelector($i, (state: IDevtoolsStore) => state.appStateDevtools); // prettier-ignore
export const $rawDevtoolsStores = createSelector($i, (state: IDevtoolsStore) => state.stores); // prettier-ignore
