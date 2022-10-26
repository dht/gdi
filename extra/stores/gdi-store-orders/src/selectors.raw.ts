import { createSelector } from 'reselect';
import { IOrdersStore } from './types';

export const $i = (state: { orders: IOrdersStore }) => state.orders;
const $n = (): null => null;
const $o = (): void => {};

export const $rawOrdersState = createSelector($i, (state: IOrdersStore) => state.appStateOrders); // prettier-ignore
export const $rawOrders = createSelector($i, (state: IOrdersStore) => state.orders); // prettier-ignore
export const $rawOrderJournals = createSelector($i, (state: IOrdersStore) => state.orderJournals); // prettier-ignore
export const $rawCoupons = createSelector($i, (state: IOrdersStore) => state.coupons); // prettier-ignore
