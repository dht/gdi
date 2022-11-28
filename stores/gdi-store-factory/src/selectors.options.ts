import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { sortBy, camelCase } from 'shared-base';
import { minutesThisX } from '@gdi/language';
import { arrayToOptions, itemsTagsToOptions, optionsPeriod } from 'shared-base';

const $i = () => {};

export const $flexEntityTypes = createSelector(raw.$i, (_state): IOption[] => {
    return arrayToOptions(['container', 'item']);
});

export const $flexDirection = createSelector(raw.$i, (_state): IOption[] => {
    return arrayToOptions(['row', 'column']);
});

export const $resolutions = createSelector(raw.$i, (_state): IOption[] => {
    return arrayToOptions([
        'mobile',
        'tablet',
        '720p',
        'HD',
        'HD+',
        '1080p',
        '2k',
        '4k',
    ]);
});

export const $layoutLocationIds = createSelector(
    base.$layoutWithAllItems,
    (layout) => {
        if (!layout) {
            return;
        }

        const { items = [] } = layout;

        return items
            .filter((i) => i.resolution === '1080p')
            .filter((i) => i.locationId)
            .map((i) => ({
                id: i.locationId,
                text: i.locationId,
            }));
    }
);

export const $flexEntityParentIds = createSelector(
    base.$layout,
    (layout): IOption[] => {
        if (!layout || !layout.items) {
            return [];
        }

        const { items } = layout;

        return items
            .map((i) => ({
                id: i.id,
                text: i.id,
            }))
            .sort(sortBy('id'));
    }
);

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $articleStatus = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['draft', 'published', 'archived']);
});

export const $articleAuthors = createSelector(
    raw.$rawArticles,
    (articles): IOption[] => {
        const groupedAuthors = Object.values(articles).reduce(
            (output, article) => {
                output[article.authorName] = true;
                return output;
            },
            {} as Json
        );

        return Object.keys(groupedAuthors)
            .sort()
            .map((authorName) => {
                const id = camelCase(authorName);

                return {
                    id,
                    text: authorName,
                    value: id,
                };
            });
    }
);

export const $articleTags = createSelector(
    raw.$rawArticles,
    (articles): IOption[] => {
        return itemsTagsToOptions(articles);
    }
);

export const $layoutTags = createSelector(
    raw.$rawLayouts,
    (layouts): IOption[] => {
        return itemsTagsToOptions(layouts);
    }
);

export const $allOptions = createSelector(
    $flexEntityTypes,
    $flexDirection,
    $resolutions,
    $flexEntityParentIds,
    $layoutLocationIds,
    $periods,
    $articleAuthors,
    $articleStatus,
    $articleTags,
    $layoutTags,
    (
        flexEntityTypes,
        flexDirection,
        resolutions,
        flexEntityParentIds,
        layoutLocationIds,
        periods,
        articleAuthors,
        articleStatus,
        articleTags,
        layoutTags
    ) => {
        return {
            $flexEntityTypes: flexEntityTypes,
            $flexDirection: flexDirection,
            $resolutions: resolutions,
            $flexEntityParentIds: flexEntityParentIds,
            $layoutLocationIds: layoutLocationIds,
            $periods: periods,
            $articleAuthors: articleAuthors,
            $articleTags: articleTags,
            $articleStatus: articleStatus,
            $layoutTags: layoutTags,
        };
    }
);
