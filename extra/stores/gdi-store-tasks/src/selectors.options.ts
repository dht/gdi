import * as base from './selectors.base';
import * as raw from './selectors.raw';

import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';
import { Action } from 'redux-store-generator';

type IOption = {
    id: string;
    label: string;
    action: Action;
};

export const $ticketsAndProjectsOptions = createSelector(
    raw.$rawProjects,
    base.$openTickets,
    (projects, tickets) => {
        const output: IOption[] = [];

        Object.values(projects)
            .sort(sortBy('key'))
            .forEach((project) => {
                output.push({
                    id: project.key,
                    label: `${project.key}: ${project.name}`,
                    action: { type: '' },
                });
            });

        Object.values(tickets)
            .sort(sortBy('summary'))
            .forEach((ticket) => {
                output.push({
                    id: ticket.key,
                    label: `${ticket.key}: ${ticket.summary}`,
                    action: { type: '' },
                });
            });

        return output;
    }
);

export const $allOptions = createSelector(
    $ticketsAndProjectsOptions,
    (ticketsAndProjectsOptions) => {
        return {
            $ticketsAndProjectsOptions: ticketsAndProjectsOptions,
        };
    }
);
