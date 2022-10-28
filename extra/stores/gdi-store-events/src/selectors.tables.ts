import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $events = createSelector(base.$events, (events) => {
    return Object.values(events);
});

export const $reminders = createSelector(base.$reminders, (reminders) => {
    return Object.values(reminders);
});
