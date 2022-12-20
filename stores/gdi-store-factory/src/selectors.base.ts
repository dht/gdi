import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { ILayouts } from './types';
import { sortBy, cloneDeep } from 'shared-base';

export const $layouts = createSelector(
    raw.$rawCurrentIds,
    raw.$rawLayouts,
    (currentIds, layouts) => {
        const { resolutionId } = currentIds;

        return Object.values(layouts).reduce((output, layout) => {
            const { id } = layout;
            const items = (layout.items ?? []).filter(
                (i) => i.resolution === resolutionId
            );

            output[id] = {
                ...layout,
                items,
            };

            return output;
        }, {} as ILayouts);
    }
);

export const $layout = createSelector(
    raw.$rawCurrentIds,
    $layouts,
    (currentIds, layouts) => {
        const { layoutId } = currentIds;
        return layouts[layoutId];
    }
);

export const $layoutWithAllItems = createSelector(
    raw.$rawCurrentIds,
    raw.$rawLayouts,
    (currentIds, layouts) => {
        const { layoutId } = currentIds;
        return layouts[layoutId];
    }
);

export const $flexEntity = createSelector(
    raw.$rawCurrentIds,
    $layout,
    (currentIds, layout) => {
        if (!layout || !layout.items) {
            return;
        }

        const { flexEntityId } = currentIds;
        return layout.items.find((i) => i.id === flexEntityId);
    }
);

export const $flexEntityFlex = createSelector($flexEntity, (flexEntity) => {
    if (!flexEntity) {
        return;
    }

    const { flex } = flexEntity;
    return flex;
});

export const $layoutRoot = createSelector($layout, (layout) => {
    if (!layout || !layout.items) {
        return;
    }

    return layout.items.find((item) => item.parentId === '');
});

export const $resolutions = createSelector(
    raw.$breakpoints,
    $layoutWithAllItems,
    (breakpoints, layout) => {
        const { items = [] } = layout ?? {};
        return Object.values(breakpoints)
            .sort(sortBy('order') as any)
            .map((breakpoint: any) => {
                const itemsForBreakpoint = items.filter(
                    (i) =>
                        i.entityType === 'item' &&
                        i.resolution === breakpoint.id
                );

                return {
                    ...breakpoint,
                    count: itemsForBreakpoint.length,
                };
            });
    }
);

export const $inspector = createSelector(
    $flexEntity,

    (flexEntity) => {
        if (!flexEntity) {
            return;
        }

        const { id, locationId, flex, order, props, style } = flexEntity;

        return {
            id,
            locationId,
            flex,
            order,
            props,
            style,
        };
    }
);

export const $layoutClean = createSelector($layout, (layout) => {
    if (!layout || !layout.items) {
        return;
    }

    const layoutClone: any = cloneDeep(layout);

    delete layoutClone['_modifiedDate'];
    delete layoutClone['_createdDate'];
    delete layoutClone['index'];

    layoutClone.items.forEach((item: any) => {
        delete item['_modifiedDate'];
        delete item['_createdDate'];
    });

    return layoutClone;
});

export const $articles = createSelector(raw.$rawArticles, (articles) => {
    return articles;
});

export const $article = createSelector(
    raw.$rawCurrentIds,
    $articles,
    (currentIds, articles) => {
        const { articleId } = currentIds;
        return articles[articleId];
    }
);

export const $articleMeta = createSelector($article, (article) => {
    if (!article) {
        return;
    }

    const { minutesSpentEditing, status, lastSaveDate } = article;

    return {
        id: article.id,
        minutesSpentEditing,
        status,
        lastSaveDate,
    };
});
