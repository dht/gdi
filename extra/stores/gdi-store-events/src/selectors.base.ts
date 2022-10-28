import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';

export const $all = (state: any) => state;

export const $sheetData = createSelector(
    raw.$rawEventsState,
    $all,
    (appState, all) => {
        const { currentNodeId } = appState;

        if (!currentNodeId) {
            return [];
        }

        const collectionData: Record<string, Json> = all[currentNodeId] ?? {};

        return Object.values(collectionData).sort(
            sortBy('_createdDate', 'asc')
        );
    }
);

export const $events = createSelector(raw.$rawEvents, (events) => {
    return events;
});

export const $reminders = createSelector(raw.$rawReminders, (reminders) => {
    return reminders;
});
