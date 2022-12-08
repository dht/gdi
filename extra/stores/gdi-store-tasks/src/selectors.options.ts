import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { arrayToOptions, itemsTagsToOptions } from 'shared-base';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';

const $i = () => {};

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
                    text: `${project.key}: ${project.name}`,
                });
            });

        Object.values(tickets)
            .sort(sortBy('summary') as any)
            .forEach((ticket: any) => {
                output.push({
                    id: ticket.key,
                    text: `${ticket.key}: ${ticket.summary}`,
                });
            });

        return output;
    }
);

export const $projectTags = createSelector(
    raw.$rawProjects,
    (projects): IOption[] => {
        return itemsTagsToOptions(projects);
    }
);

export const $ticketsTags = createSelector(
    raw.$rawTickets,
    (tickets): IOption[] => {
        return itemsTagsToOptions(tickets as any);
    }
);

export const $ticketStatus = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['backlog', 'in progress', 'done']);
});

export const $allOptions = createSelector(
    $ticketsAndProjectsOptions,
    $projectTags,
    $ticketsTags,
    $ticketStatus,
    (ticketsAndProjectsOptions, projectTags, ticketsTags, ticketStatus) => {
        return {
            $ticketsAndProjectsOptions: ticketsAndProjectsOptions,
            $projectTags: projectTags,
            $ticketsTags: ticketsTags,
            $ticketStatus: ticketStatus,
        };
    }
);
