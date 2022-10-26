import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $things = createSelector(raw.$rawThings, (things) => {
    return Object.values(things);
});
