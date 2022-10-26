import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $products = createSelector(raw.$rawProducts, (products) => {
    return Object.values(products);
});
