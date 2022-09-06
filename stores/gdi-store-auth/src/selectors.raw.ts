import { createSelector } from 'reselect';
import { IAuthStore } from './types';

export const $i = (state: IAuthStore) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $rawAuthState = createSelector($i, (state: IAuthStore) => state.authState); // prettier-ignore
export const $rawMe = createSelector($i, (state: IAuthStore) => state.me); // prettier-ignore
export const $rawUsers = createSelector($i, (state: IAuthStore) => state.users); // prettier-ignore
export const $rawAdmins = createSelector($i, (state: IAuthStore) => state.admins); // prettier-ignore
