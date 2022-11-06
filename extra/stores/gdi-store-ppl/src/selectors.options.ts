import { createSelector } from 'reselect';
import { IPplStore } from './types';
import * as raw from './selectors.raw';
import { IAllSelectOptions, IPersons } from './types';
import { itemsTagsToOptions, arrayToOptions } from 'shared-base';

export const $i = (state: { ppl: IPplStore }) => state.ppl;

export const $pplGender = createSelector($i, () => {
    return arrayToOptions(['male', 'female', 'other']);
});

export const $pplCategory = createSelector($i, () => {
    return arrayToOptions([
        'friends',
        'family',
        'lead',
        'client',
        'cooperation',
        'local',
        'global',
    ]);
});

export const $pplTags = createSelector(raw.$rawPersons, (ppl: IPersons) => {
    return itemsTagsToOptions(ppl);
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
