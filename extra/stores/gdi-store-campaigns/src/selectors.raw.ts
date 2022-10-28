import { createSelector } from 'reselect';
import { ICampaignsStore } from './types';

export const $i = (state: { campaigns: ICampaignsStore }) => state.campaigns;
const $n = (): null => null;
const $o = (): void => {};

export const $rawCampaignsState = createSelector($i, (state: ICampaignsStore) => state.appStateCampaigns); // prettier-ignore
export const $rawCampaigns = createSelector($i, (state: ICampaignsStore) => state.campaigns); // prettier-ignore
