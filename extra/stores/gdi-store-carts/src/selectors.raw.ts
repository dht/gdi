import { createSelector } from 'reselect';
import { ICartsStore } from './types';

export const $i = (state: { carts: ICartsStore }) => state.carts;
const $n = (): null => null;
const $o = (): void => {};

export const $rawCartsState = createSelector($i, (state: ICartsStore) => state.appStateCarts); // prettier-ignore
export const $rawCarts = createSelector($i, (state: ICartsStore) => state.carts); // prettier-ignore
