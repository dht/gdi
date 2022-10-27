import * as raw from './selectors.raw';
import * as base from './selectors.base';
import { createSelector } from 'reselect';
import { sortByTicketKey } from './utils/sort';
import { sortBy } from 'shared-base';

export const $tickets = createSelector(
    base.$projectKey,
    raw.$rawTickets,
    (projectKey, tickets) => {
        return Object.values(tickets)
            .filter(
                (ticket) =>
                    ticket.projectKey === projectKey ||
                    !projectKey ||
                    projectKey === 'ALL'
            )
            .sort(sortByTicketKey(true));
    }
);

export const $projects = createSelector(raw.$rawProjects, (projects) => {
    return Object.values(projects).sort(sortBy('name'));
});
