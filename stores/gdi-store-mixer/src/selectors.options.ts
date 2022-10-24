import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { minutesThisX } from '@gdi/language';

const $i = () => {};

export const $instanceTypes = createSelector(
    base.$instanceTypes,
    (instanceTypes): IOption[] => {
        return instanceTypes.map((instanceType) => {
            return {
                id: instanceType,
                text: instanceType,
            };
        });
    }
);

export const $imageTags = createSelector(
    base.$libraryImages,
    (images): IOption[] => {
        const allTags = new Set<string>();

        images.forEach((image) => {
            const { tags } = image;
            tags.forEach((tag) => allTags.add(tag));
        });

        const output = Array.from(allTags);

        output.sort();

        return output.map((tag) => ({
            id: tag,
            text: tag,
        }));
    }
);

export const $imageFields = createSelector(
    base.$imageFieldsForCurrentElement,
    (imageFields): IOption[] => {
        return Object.keys(imageFields ?? {}).map((id) => {
            const text = id.split('.').pop() || id;

            return {
                id,
                text,
            };
        });
    }
);

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();

    return [
        {
            id: 'lastHour',
            text: 'Last hour',
            max: 60,
        },
        {
            id: 'today',
            text: 'Today',
            max: minutes.today,
        },
        {
            id: 'thisWeek',
            text: 'This week',
            max: minutes.week,
        },
        {
            id: 'thisMonth',
            text: 'This month',
            max: minutes.month,
        },
        {
            id: 'thisYear',
            text: 'This year',
            max: minutes.year,
        },
    ];
});

export const $allOptions = createSelector(
    $instanceTypes,
    $imageTags,
    $imageFields,
    $periods,
    (instanceTypes, imageTags, imageFields, periods) => {
        return {
            $instanceTypes: instanceTypes,
            $imageTags: imageTags,
            $imageFields: imageFields,
            $periods: periods,
        };
    }
);
