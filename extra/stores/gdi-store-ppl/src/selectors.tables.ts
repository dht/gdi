import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $ppl = createSelector(raw.$rawPersons, (persons) => {
    return Object.values(persons);
});
