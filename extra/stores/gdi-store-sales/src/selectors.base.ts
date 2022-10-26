import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $sales = createSelector(raw.$rawSales, (sales) => {
    return Object.values(sales);
});
