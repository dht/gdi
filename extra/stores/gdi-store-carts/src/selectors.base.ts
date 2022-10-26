import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $carts = createSelector(raw.$rawCarts, (carts) => {
    return Object.values(carts);
});
