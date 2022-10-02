import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $layouts = createSelector(base.$layouts, (layouts) => {
    return Object.values(layouts);
});

export const $articles = createSelector(base.$articles, (articles) => {
    return Object.values(articles);
});

export const $layoutItems = createSelector(base.$layout, (layout) => {
    if (!layout) {
        return [];
    }

    return layout.items;
});
