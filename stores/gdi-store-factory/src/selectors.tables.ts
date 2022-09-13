import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $layouts = createSelector(base.$layouts, (layouts) => {
    return Object.values(layouts);
});

export const $layoutItems = createSelector(base.$layout, (layout) => {
    if (!layout) {
        return [];
    }

    return layout.items;
});
