import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $carts = createSelector(raw.$rawCarts, (persons) => {
    return Object.values(persons);
});
