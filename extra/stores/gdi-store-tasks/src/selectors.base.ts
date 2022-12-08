import * as raw from './selectors.raw';
import { calculateSession } from './utils/session';
import { createSelector } from 'reselect';
import { IActiveTask, IProjects, ProjectColors } from './types';
import { ITasksStore } from './types';
import { pickBy } from 'shared-base';

export const $currentSession = createSelector(
    raw.$rawSessions,
    raw.$rawCurrentIds,
    (sessions, currentIds) => {
        const { sessionId } = currentIds;
        return sessions[sessionId!];
    }
);

export const $currentTicket = createSelector(
    $currentSession,
    raw.$rawTickets,
    (session, tickets) => {
        const { ticketKey } = session ?? {};

        return Object.values(tickets).find(
            (ticket) => ticket.key === ticketKey
        );
    }
);

export const $currentTicketWorklogs = createSelector(
    $currentTicket,
    raw.$rawWorklogs,
    (ticket, worklogs) => {
        if (!ticket) {
            return {};
        }

        const { key } = ticket;

        return pickBy(worklogs, (worklog) => worklog.ticketKey === key);
    }
);

export const $recentSessions = createSelector(
    raw.$rawRecentSessions,
    raw.$rawTickets,
    (recentSessions, tickets) => {
        return Object.values(recentSessions)
            .reverse()
            .map((session) => {
                const ticket = Object.values(tickets).find(
                    (ticket) => ticket.key === session.ticketKey
                );

                return {
                    ...ticket,
                    session,
                    sessionId: session.id,
                };
            })
            .filter((i) => i.key);
    }
);

export const $activeTask = createSelector(
    $currentTicket,
    $currentSession,
    $currentTicketWorklogs,
    (ticket, session, worklogs) => {
        const stats = calculateSession({
            ticket,
            session,
            worklogs,
        });

        const isLoaded = typeof ticket === 'object';

        return {
            ticket,
            session,
            stats,
            isLoaded,
        } as IActiveTask;
    }
);

export const $activeTaskNonMemoized = (state: ITasksStore) => {
    const ticket = $currentTicket(state as any);
    const session = $currentSession(state as any);
    const worklogs = $currentTicketWorklogs(state as any);

    const stats = calculateSession({
        ticket,
        session,
        worklogs,
    });

    const isLoaded = typeof ticket === 'object';

    return {
        ticket,
        session,
        stats,
        isLoaded,
    } as IActiveTask;
};

export const $projects = createSelector(raw.$rawProjects, (projects) => {
    return Object.values(projects).reduce((output, project: any) => {
        output[project.id] = {
            id: project.id,
            key: project.key,
            name: project.name,
            avatarUrls: project.avatarUrls,
            projectType: project.projectTypeKey,
        };
        return output;
    }, {} as any) as IProjects;
});

export const $tickets = createSelector(raw.$rawTickets, (tickets) => {
    return tickets;
});

export const $nfc = createSelector(raw.$rawTasksState, (tasksState) => {
    const { lastNfcTimestamp, lastNfcValue } = tasksState;
    return { lastNfcTimestamp, lastNfcValue };
});

export const $nfcTicketToWrite = createSelector(
    raw.$rawTasksState,
    raw.$rawTickets,
    (tasksState, tickets) => {
        const { ticketToWrite } = tasksState;
        const ticket = ticketToWrite ? tickets[ticketToWrite] : null;

        return ticket;
    }
);

export const $projectsColors = createSelector(raw.$rawProjects, (projects) => {
    return Object.values(projects).reduce((output, project) => {
        output[project.key] = project.color;
        return output;
    }, {} as ProjectColors);
});

export const $openTickets = createSelector(raw.$rawTickets, (tickets) => {
    return pickBy<ITicket>(tickets, (ticket) => {
        return (
            ticket.isContinuous ||
            (ticket.status !== 'Done' && ticket.issueType !== 'Epic')
        );
    });
});

export const $projectId = createSelector(
    raw.$rawCurrentIds,
    raw.$rawProjects,
    (currentIds, projects) => {
        const { projectId } = currentIds;

        if (!projectId) {
            const firstProject = Object.values(projects)[0];
            return firstProject?.id;
        }

        return projectId;
    }
);

export const $projectKey = createSelector(
    raw.$rawCurrentIds,
    raw.$rawProjects,
    (currentIds, projects) => {
        const { projectKey } = currentIds;

        if (!projectKey) {
            const firstProject = Object.values(projects)[0];
            return firstProject?.key;
        }

        return projectKey;
    }
);
