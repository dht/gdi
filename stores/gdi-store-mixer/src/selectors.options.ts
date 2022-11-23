import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { arrayToOptions, itemsTagsToOptions, optionsPeriod } from 'shared-base';
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
        return itemsTagsToOptions(images);
    }
);

export const $pageTags = createSelector(
    raw.$rawLibraryPages,
    (pages): IOption[] => {
        return itemsTagsToOptions(pages);
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
    return optionsPeriod(minutes, true);
});

export const $pageStatus = createSelector($i, (_i): IOption[] => {
    return arrayToOptions([
        'draft|Lightbulb',
        'production|Sunny',
        'archived|PlugDisconnected',
    ]);
});

export const $allOptions = createSelector(
    $instanceTypes,
    $imageTags,
    $imageFields,
    $pageStatus,
    $pageTags,
    $periods,
    (instanceTypes, imageTags, imageFields, pageStatus, pageTags, periods) => {
        return {
            $instanceTypes: instanceTypes,
            $imageTags: imageTags,
            $imageFields: imageFields,
            $pageStatus: pageStatus,
            $pageTags: pageTags,
            $periods: periods,
        };
    }
);
