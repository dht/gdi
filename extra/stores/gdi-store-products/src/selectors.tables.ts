import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $products = createSelector(raw.$rawProducts, (persons) => {
    return Object.values(persons);
});
