import { createSelector } from 'reselect';
import { IPlatformStore } from './initialState';

export const $i = (state: IPlatformStore) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawPlatformState = createSelector($i, (state: IPlatformStore) => state.appStatePlatform); // prettier-ignore
export const $rawLogs = createSelector($i, (state: IPlatformStore) => state.logs); // prettier-ignore
