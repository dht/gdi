import { createSelector } from 'reselect';
import { ILeads, ILeadsStore } from './types';
import * as raw from './selectors.raw';

export const $i = (state: { leads: ILeadsStore }) => state.leads;

export const $leadsTags = createSelector(raw.$rawLeads, (leads: ILeads) => {
    const allTags: Record<string, boolean> = {};

    Object.values(leads).forEach((person) => {
        const { tags } = person;

        tags.forEach((tag) => {
            allTags[tag] = true;
        });
    });

    return Object.keys(allTags).map((tag) => ({
        id: tag,
        text: tag,
    })) as IOptions;
});

export const $allOptions = createSelector($leadsTags, (leadsTags) => {
    return {
        $leadsTags: leadsTags,
    } as IAllSelectOptions;
});
