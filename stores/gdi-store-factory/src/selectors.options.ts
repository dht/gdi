import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';
import { minutesThisX } from '@gdi/language';
import { camelCase } from 'lodash';

const $i = () => {};

export const $flexEntityTypes = createSelector(raw.$i, (_state): IOption[] => {
    return [
        {
            id: 'container',
            text: 'container',
        },
        {
            id: 'item',
            text: 'item',
        },
    ];
});

export const $flexDirection = createSelector(raw.$i, (_state): IOption[] => {
    return [
        {
            id: 'row',
            text: 'row',
        },
        {
            id: 'column',
            text: 'column',
        },
    ];
});

export const $resolutions = createSelector(raw.$i, (_state): IOption[] => {
    return [
        {
            id: 'mobile',
            text: 'mobile',
        },
        {
            id: 'tablet',
            text: 'tablet',
        },
        {
            id: '720p',
            text: '720p',
        },
        {
            id: 'HD',
            text: 'HD',
        },
        {
            id: 'HD+',
            text: 'HD+',
        },
        {
            id: '1080p',
            text: '1080p',
        },
        {
            id: '2k',
            text: '2k',
        },
        {
            id: '4k',
            text: '4k',
        },
    ];
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
        const allTags: Json = {};
        Object.values(articles).forEach((article) => {
            const { tags = [] } = article;

            tags.forEach((tag) => {
                allTags[tag] = true;
            });
        }, {} as Json);

        return Object.keys(allTags)
            .sort()
            .map((tag) => {
                return {
                    id: tag,
                    text: tag,
                    value: tag,
                };
            });
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
    $articleTags,
    (
        flexEntityTypes,
        flexDirection,
        resolutions,
        flexEntityParentIds,
        layoutLocationIds,
        periods,
        articleAuthors,
        articleTags
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
        };
    }
);
