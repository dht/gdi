import { createSelector } from 'reselect';
import { IProductsStore } from './types';

export const $i = (state: { products: IProductsStore }) => state.products;
const $n = (): null => null;
const $o = (): void => {};

export const $rawProductsState = createSelector($i, (state: IProductsStore) => state.appStateProducts); // prettier-ignore
export const $rawProducts = createSelector($i, (state: IProductsStore) => state.products); // prettier-ignore
