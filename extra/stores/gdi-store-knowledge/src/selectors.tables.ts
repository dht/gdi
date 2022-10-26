import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $links = createSelector(raw.$rawLinks, (links) => {
    return Object.values(links);
});
