import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $interestingReads = createSelector(
    raw.$rawInterestingReads,
    (interestingReads) => {
        return Object.values(interestingReads);
    }
);
