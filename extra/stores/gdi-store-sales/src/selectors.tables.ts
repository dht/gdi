import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $sales = createSelector(raw.$rawSales, (persons) => {
    return Object.values(persons);
});
