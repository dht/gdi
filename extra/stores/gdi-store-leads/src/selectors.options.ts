import { createSelector } from 'reselect';
import { ILeads, ILeadsStore } from './types';
import * as raw from './selectors.raw';
import { minutesThisX } from '@gdi/language';
import { arrayToOptions, itemsTagsToOptions, optionsPeriod } from 'shared-base';

export const $i = (state: { leads: ILeadsStore }) => state.leads;

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $leadsTags = createSelector(raw.$rawLeads, (leads: ILeads) => {
    return itemsTagsToOptions(leads);
});

export const $status = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['active', 'inactive', 'lost', 'sale', 'pending']);
});

export const $source = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['campaign', 'landingPage', 'manual', 'other']);
});

export const $allOptions = createSelector(
    $periods,
    $status,
    $source,
    $leadsTags,
    (periods, status, source, leadsTags) => {
        return {
            $periods: periods,
            $status: status,
            $source: source,
            $leadsTags: leadsTags,
        } as IAllSelectOptions;
    }
);
