import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { sortBy } from 'shared-base';

export const $i = (state: any) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $dashboard = createSelector(raw.$rawDashboard, (dashboard) => {
    return dashboard;
});

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
