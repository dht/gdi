import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $events = createSelector(base.$events, (events) => {
    return Object.values(events);
});
