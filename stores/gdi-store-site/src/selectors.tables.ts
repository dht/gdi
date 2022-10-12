import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $pages = createSelector(base.$pages, (pages) => {
    return Object.values(pages);
});
