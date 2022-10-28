import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $leads = createSelector(raw.$rawLeads, (leads) => {
    return Object.values(leads);
});
