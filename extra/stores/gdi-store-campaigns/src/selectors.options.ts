import { createSelector } from 'reselect';
import { ICampaigns, ICampaignsStore } from './types';
import * as raw from './selectors.raw';

export const $i = (state: { campaigns: ICampaignsStore }) => state.campaigns;

export const $campaignsTags = createSelector(
    raw.$rawCampaigns,
    (campaigns: ICampaigns) => {
        const allTags: Record<string, boolean> = {};

        Object.values(campaigns).forEach((person) => {
            const { tags } = person;

            tags.forEach((tag) => {
                allTags[tag] = true;
            });
        });

        return Object.keys(allTags).map((tag) => ({
            id: tag,
            text: tag,
        })) as IOptions;
    }
);

export const $allOptions = createSelector($campaignsTags, (campaignsTags) => {
    return {
        $campaignsTags: campaignsTags,
    } as IAllSelectOptions;
});
