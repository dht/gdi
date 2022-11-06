import { createSelector } from 'reselect';
import { ICampaigns, ICampaignsStore } from './types';
import * as raw from './selectors.raw';
import { arrayToOptions, itemsTagsToOptions, optionsPeriod } from 'shared-base';
import { minutesThisX } from '@gdi/language';

export const $i = (state: { campaigns: ICampaignsStore }) => state.campaigns;

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $budget = createSelector($i, (_i): IOption[] => {
    return [
        {
            id: 'm0-20',
            text: '0-20',
            min: 0,
            max: 20,
        },
        {
            id: 'm20-40',
            text: '20-40',
            min: 20,
            max: 40,
        },
        {
            id: 'm40-100',
            text: '40-100',
            min: 40,
            max: 100,
        },
        {
            id: 'm100+',
            text: '100+',
            min: 100,
        },
    ];
});

export const $status = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['pending', 'running', 'completed', 'archived']);
});

export const $source = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['facebook', 'instagram', 'google', 'other']);
});

export const $campaignsTags = createSelector(
    raw.$rawCampaigns,
    (campaigns: ICampaigns) => {
        return itemsTagsToOptions(campaigns);
    }
);

export const $allOptions = createSelector(
    $periods,
    $status,
    $source,
    $budget,
    $campaignsTags,
    (periods, status, source, budget, campaignsTags) => {
        return {
            $periods: periods,
            $status: status,
            $source: source,
            $budget: budget,
            $campaignsTags: campaignsTags,
        } as IAllSelectOptions;
    }
);
