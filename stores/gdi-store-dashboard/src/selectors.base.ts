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
    (inboxMessages) => {
        return Object.values(inboxMessages)
        .sort(sortBy('date', 'desc'));
    }
);

export const $inboxMessage = createSelector(
    $inboxMessages,
    raw.$rawCurrentIdsDashboard,

    (inboxMessages, currentIds) => {
        const { inboxMessageId } = currentIds;

        if (!inboxMessageId) {
            return null;
        }

        return inboxMessages.find((i) => i.id === inboxMessageId);
    }
);

export const $snoozeShortKeys = createSelector($o, () => {
    return [
        {
            id: '20m',
            key: '1',
            description: '20m',
        },
        {
            id: '1hr',
            key: '2',
            description: '1hr',
        },
        {
            id: '2hr',
            key: '3',
            description: '2hr',
        },
        {
            id: '4hr',
            key: '4',
            description: '4hr',
        },
        {
            id: '1d',
            key: '5',
            description: '1d',
        },
        {
            id: '2d',
            key: '6',
            description: '2d',
        },
        {
            id: '1w',
            key: '7',
            description: '1w',
        },
        {
            id: '4w',
            key: '8',
            description: '4w',
        },
    ];
});
