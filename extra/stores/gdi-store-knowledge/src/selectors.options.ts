import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { minutesThisX } from '@gdi/language';
import { sortBy } from 'shared-base';
import { itemsTagsToOptions, optionsPeriod } from 'shared-base';

const $i = () => {};

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes);
});

export const $linkTags = createSelector(raw.$rawLinks, (links): IOption[] => {
    return itemsTagsToOptions(links);
});

export const $linkCategories = createSelector(
    raw.$rawLinkCategories,
    (categories): IOption[] => {
        return Object.values(categories)
            .map((category) => {
                const { id, name } = category;

                return {
                    id: id,
                    text: name,
                    value: id,
                };
            })
            .sort(sortBy('text'));
    }
);

export const $allOptions = createSelector(
    $periods,
    $linkTags,
    $linkCategories,
    (periods, tags, categories) => {
        return {
            $periods: periods,
            $linkTags: tags,
            $linkCategories: categories,
        };
    }
);
