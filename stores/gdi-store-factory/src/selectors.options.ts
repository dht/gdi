import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';

type Option = {
    key: string;
    text: string;
};

export const $flexEntityTypes = createSelector(raw.$i, (_state): Option[] => {
    return [
        {
            key: 'container',
            text: 'container',
        },
        {
            key: 'item',
            text: 'item',
        },
    ];
});

export const $flexDirection = createSelector(raw.$i, (_state): Option[] => {
    return [
        {
            key: 'row',
            text: 'row',
        },
        {
            key: 'column',
            text: 'column',
        },
    ];
});

export const $resolutions = createSelector(raw.$i, (_state): Option[] => {
    return [
        {
            key: 'mobile',
            text: 'mobile',
        },
        {
            key: 'tablet',
            text: 'tablet',
        },
        {
            key: '720p',
            text: '720p',
        },
        {
            key: 'HD',
            text: 'HD',
        },
        {
            key: 'HD+',
            text: 'HD+',
        },
        {
            key: '1080p',
            text: '1080p',
        },
        {
            key: '2k',
            text: '2k',
        },
        {
            key: '4k',
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
                key: i.locationId,
                text: i.locationId,
            }));
    }
);

export const $flexEntityParentIds = createSelector(
    base.$layout,
    (layout): Option[] => {
        if (!layout || !layout.items) {
            return [];
        }

        const { items } = layout;

        return items
            .map((i) => ({
                key: i.id,
                text: i.id,
            }))
            .sort(sortBy('key'));
    }
);

export const $allOptions = createSelector(
    $flexEntityTypes,
    $flexDirection,
    $resolutions,
    $flexEntityParentIds,
    $layoutLocationIds,
    (
        flexEntityTypes,
        flexDirection,
        resolutions,
        flexEntityParentIds,
        layoutLocationIds
    ) => {
        return {
            $flexEntityTypes: flexEntityTypes,
            $flexDirection: flexDirection,
            $resolutions: resolutions,
            $flexEntityParentIds: flexEntityParentIds,
            $layoutLocationIds: layoutLocationIds,
        };
    }
);
