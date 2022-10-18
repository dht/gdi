import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { sortBy } from 'shared-base';

export const $i = (state: any) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $appStateDashboard = createSelector(
    raw.$rawAppStateDashboard,
    (dashboard) => {
        return dashboard;
    }
);

export const $stats = createSelector(
    raw.$rawStats,
    raw.$rawStatsJourneys,
    (stats, journeys) => {
        return Object.values(stats)
            .sort(sortBy('order'))
            .reduce((acc, stat) => {
                const { id } = stat;

                const journey = Object.values(journeys).filter(
                    (journey) => journey.statId === id
                );

                return {
                    ...acc,
                    [id]: {
                        ...stat,
                        journey,
                    },
                };
            }, {});
    }
);

export const $inboxMessages = createSelector(
    raw.$rawInboxMessages,
    (inboxMessages) => inboxMessages
);

export const $inboxMessage = createSelector(
    $inboxMessages,
    raw.$rawCurrentIdsDashboard,

    (inboxMessages, currentIds) => {
        return inboxMessages[currentIds.inboxMessageId];
    }
);
