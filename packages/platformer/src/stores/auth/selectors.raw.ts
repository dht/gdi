import { createSelector } from 'reselect';
import { IAuthStore } from './initialState';

export const $i = (state: { auth: IAuthStore }) => state.auth;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawAuthState = createSelector($i, (state) => state.appStateAuth);
export const $rawUsers = createSelector($i, (state) => state.users); // prettier-ignore
export const $rawRoles = createSelector($i, (state) => state.roles); // prettier-ignore
export const $rawMe = createSelector($i, (state) => state.me); // prettier-ignore
export const $rawRefreshTokens = createSelector($i, (state) => state.refreshTokens); // prettier-ignore
