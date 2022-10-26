import { createSelector } from 'reselect';
import { ISalesStore } from './types';

export const $i = (state: { sales: ISalesStore }) => state.sales;
const $n = (): null => null;
const $o = (): void => {};

export const $rawSalesState = createSelector($i, (state: ISalesStore) => state.appStateSales); // prettier-ignore
export const $rawSales = createSelector($i, (state: ISalesStore) => state.sales); // prettier-ignore
