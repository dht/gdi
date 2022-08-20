import { createSelector } from 'reselect';
import { IAuthStore } from './types';

export const $i = (state: IAuthStore) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $rawUser = createSelector($i, (state: IAuthStore) => state.user); // prettier-ignore
export const $rawAuthState = createSelector($i, (state: IAuthStore) => state.authState); // prettier-ignore
