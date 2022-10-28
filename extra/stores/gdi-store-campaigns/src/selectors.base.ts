import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $campaigns = createSelector(raw.$rawCampaigns, (campaigns) => {
    return Object.values(campaigns);
});
