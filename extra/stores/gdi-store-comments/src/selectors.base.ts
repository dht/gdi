import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $comments = createSelector(raw.$rawComments, (comments) => {
    return Object.values(comments);
});
