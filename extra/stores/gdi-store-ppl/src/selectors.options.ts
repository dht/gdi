import { createSelector } from 'reselect';
import { IPplStore } from './types';
import * as raw from './selectors.raw';
import { IAllSelectOptions, IPersons } from './types';

export const $i = (state: { ppl: IPplStore }) => state.ppl;

export const $pplGender = createSelector($i, () => {
    return [
        {
            key: 'male',
            text: 'Male',
        },
        {
            key: 'female',
            text: 'Female',
        },
        {
            key: 'other',
            text: 'Other',
        },
    ] as IOptions;
});

export const $pplCategory = createSelector($i, () => {
    return [
        {
            key: 'friends',
            text: 'Friends',
        },
        {
            key: 'family',
            text: 'Family',
        },
        {
            key: 'local',
            text: 'Local',
        },
        {
            key: 'global',
            text: 'Global',
        },
    ] as IOptions;
});

export const $pplTags = createSelector(raw.$rawPersons, (ppl: IPersons) => {
    const allTags: Record<string, boolean> = {};

    Object.values(ppl).forEach((person) => {
        const { tags = [] } = person;

        tags.forEach((tag) => {
            allTags[tag] = true;
        });
    });

    return Object.keys(allTags).map((tag) => ({
        key: tag,
        text: tag,
    })) as IOptions;
});

export const $allOptions = createSelector(
    $pplCategory,
    $pplGender,
    $pplTags,
    (pplCategory, pplGender, pplTags) => {
        return {
            $pplGender: pplGender,
            $pplTags: pplTags,
            $pplCategory: pplCategory,
        } as IAllSelectOptions;
    }
);
