import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $orders = createSelector(raw.$rawOrders, (persons) => {
    return Object.values(persons);
});

export const $coupons = createSelector(raw.$rawCoupons, (coupons) => {
    return Object.values(coupons);
});
