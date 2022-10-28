import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $orders = createSelector(raw.$rawOrders, (orders) => {
    return Object.values(orders);
});

export const $coupons = createSelector(raw.$rawCoupons, (coupons) => {
    return Object.values(coupons);
});
