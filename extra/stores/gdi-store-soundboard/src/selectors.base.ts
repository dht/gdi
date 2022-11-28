import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { get } from 'shared-base';
import {
    DayAndTime,
    GroupedMana,
    GroupedScheduleSessions,
    IMana,
    IScheduleBlock,
    IScheduleSession,
    WeekPointer,
} from './types';
import { tasks } from '@gdi/store-tasks';
import { XDate } from '@gdi/language';

const selectorsTasks = tasks.selectors;

export const $actualByProjects = createSelector(raw.$rawProjects, () => {});

export const $projects = createSelector(raw.$rawProjects, (projects) => {
    return projects;
});

const RANGE_SIZE = 6;

export const $weeks = createSelector(raw.$rawSoundboardState, (appState) => {
    const { startWeek, startYear, week, year } = appState;

    const output: WeekPointer[] = [];

    let cursorDate = XDate.fromWeek(startWeek, startYear);

    for (let delta = 0; delta < RANGE_SIZE; delta++) {
        const cursorWeek = cursorDate.toInfo().week;
        const cursorYear = cursorDate.toInfo().year;

        const isCurrentWeek = cursorWeek === week && cursorYear === year;

        output.push({
            weekAndYear: cursorDate.toInfo().weekAndYear,
            week: cursorDate.toInfo().week,
            year: cursorDate.toInfo().year,
            isCurrentWeek,
        });

        cursorDate = cursorDate.add(1, 'week');
    }

    return output;
});

export const $expectedManasByProject = createSelector(
    raw.$rawCurrentIds,
    raw.$rawExpectedManas,
    (currentIds, expectedManas) => {
        const { projectKey: selectedProjectKey } = currentIds;

        const output: GroupedMana = {
            byWeek: {},
            byProject: {},
        };

        Object.values(expectedManas).forEach((mana: IMana) => {
            const { date, minutes, projectKey } = mana;

            const isCurrentProject = projectKey === selectedProjectKey;
            const lastKey = isCurrentProject ? 'currentItem' : 'otherItems';
            const lastKeyTitles = isCurrentProject
                ? 'currentItemTitles'
                : 'otherItemsTitles';

            const dateInfo = new XDate(new Date(date)).toInfo();

            if (projectKey) {
                xpath(output, ['byWeek', dateInfo.weekAndYear, `d${dateInfo.dayOfWeek}`, lastKey], (value: number = 0) => value + minutes); // prettier-ignore
                xpath(output, ['byWeek', dateInfo.weekAndYear, 'total', projectKey], (value: number = 0) => value + minutes); // prettier-ignore
                xpath(output, ['byWeek', dateInfo.weekAndYear, `d${dateInfo.dayOfWeek}`, lastKeyTitles], (titles) => ({...titles, [projectKey]: true})); // prettier-ignore
                xpath(output, ['byProject', projectKey, dateInfo.dateString], (value: number = 0) => value + minutes); // prettier-ignore
                xpath(output, ['byProject', projectKey, dateInfo.weekAndYear], (value: number = 0) => value + minutes); // prettier-ignore
            }
        });

        return output;
    }
);

export const $hoursPerPeriod = createSelector(
    raw.$rawSoundboardState,
    (appState) => {
        const { dailyHours, weeklyHours, quarterlyHours } = appState;

        return {
            perDay: dailyHours,
            perWeek: weeklyHours,
            perQuarter: quarterlyHours,
        };
    }
);

export const $selectedProjectKey = createSelector(
    raw.$rawCurrentIds,
    (currentIds) => {
        return currentIds.projectKey;
    }
);

export const $projectsTable = createSelector(
    $projects,
    raw.$rawSoundboardState,
    raw.$rawCurrentIds,
    $expectedManasByProject,
    (projects, appState, currentIds, expectedManas) => {
        const { projectKey } = currentIds;
        const { hoverDate, hoverWeek } = appState;

        return Object.values(projects)
            .map((project) => {
                let transientMinutes: number | null = null;

                transientMinutes =
                    get(
                        expectedManas,
                        `byProject.${project.key}.${hoverDate}`
                    ) ||
                    get(expectedManas, `byProject.${project.key}.${hoverWeek}`);

                if ((hoverDate || hoverWeek) && !transientMinutes) {
                    transientMinutes = 0;
                }

                const isSelected = projectKey === project.key;
                return {
                    ...project,
                    isSelected,
                    transientMinutes,
                };
            })
            .sort((a: any, b: any) => {
                if (a.transientMinutes === b.transientMinutes) {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
                }

                return a.transientMinutes < b.transientMinutes ? 1 : -1;
            });
    }
);

export const $projectsSoundboard = createSelector(
    $projects,
    $expectedManasByProject,
    (projects, expectedManas) => {
        return Object.values(projects)
            .map((project) => {
                let transientMinutes: number | null = null;

                const hoverDate = new XDate().toInfo().dateString;

                transientMinutes = get(
                    expectedManas,
                    `byProject.${project.key}.${hoverDate}`
                );

                if (!transientMinutes) {
                    transientMinutes = 0;
                }

                return {
                    ...project,
                    transientMinutes,
                };
            })
            .sort((a: any, b: any) => {
                if (a.transientMinutes === b.transientMinutes) {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
                }

                return a.transientMinutes < b.transientMinutes ? 1 : -1;
            });
    }
);

export const $scheduleBlocks = createSelector(
    raw.$rawSchedulerState,
    raw.$rawScheduleBlocks,
    (appState, blocks) => {
        const { isDayTime } = appState;

        return Object.values(blocks)
            .map((block: IScheduleBlock) => {
                const startTimeNumeric = timeToNumber(block.startTime);

                return {
                    ...block,
                    startTimeNumeric,
                };
            })
            .filter((block) => {
                if (isDayTime) {
                    return block.startTimeNumeric < 16;
                } else {
                    return block.startTimeNumeric >= 16;
                }
            })
            .sort((a: any, b: any) => {
                if (a.startTimeNumeric === b.startTimeNumeric) {
                    return 0;
                }

                return a.startTimeNumeric > b.startTimeNumeric ? 1 : -1;
            });
    }
);

export const $projectsByKey = createSelector(raw.$rawProjects, (projects) => {
    return Object.values(projects).reduce((output, project) => {
        output[project.key] = project;
        return output;
    }, {} as IProjects);
});

export const $ticketsByKey = createSelector(raw.$rawTickets, (tickets) => {
    return Object.values(tickets).reduce((output, ticket) => {
        output[ticket.key] = ticket;
        return output;
    }, {} as ITickets);
});

export const $scheduleSessions = createSelector(
    raw.$rawScheduleSessions,
    $projectsByKey,
    $ticketsByKey,
    (scheduleSessions, projects, tickets) => {
        const output: GroupedScheduleSessions = {};

        Object.values(scheduleSessions).forEach(
            (scheduleSession: IScheduleSession) => {
                const project = projects[scheduleSession.projectKey ?? ''];
                const ticket = tickets[scheduleSession.ticketKey ?? ''];
                xpath(
                    output,
                    [
                        String(scheduleSession.day),
                        scheduleSession.blockKey ?? '',
                    ],
                    () => ({
                        scheduleSession,
                        project,
                        ticket,
                    })
                );
            }
        );

        return output;
    }
);

export const $agenda = createSelector(
    raw.$now,
    raw.$rawScheduleSessions,
    selectorsTasks.raw.$rawProjects,
    selectorsTasks.raw.$rawTickets,
    (now, scheduleSessions, projects, tickets) => {
        return Object.values(scheduleSessions)
            .filter((item: IScheduleSession) => {
                return (
                    item.day === now.day &&
                    item.week === now.week &&
                    item.year === now.year
                );
            })
            .map((item: IScheduleSession) => {
                const { projectKey, ticketKey } = item;

                let title = item.title;

                if (projectKey) {
                    const project = Object.values(projects).find(project => project.key === projectKey); // prettier-ignore
                    title = project?.name || title;
                } else if (ticketKey) {
                    const ticket = Object.values(tickets).find(ticket => ticket.key === ticketKey); // prettier-ignore
                    title = ticket?.summary || title;
                }

                return {
                    ...item,
                    time: item.blockKey,
                    title,
                };
            });
    }
);

export const $currentDayAndTime = createSelector(
    raw.$rawSchedulerState,
    (appState) => {
        return {
            day: appState.day,
            time: appState.time,
        } as DayAndTime;
    }
);

type XPathCallback = (currentValue: any) => any;

const xpath = (object: any, path: string[], callback: XPathCallback) => {
    let cursor = object;

    const lastPathPart = path.pop();

    path.forEach((pathPart) => {
        if (!cursor[pathPart]) {
            cursor[pathPart] = {};
        }
        cursor = cursor[pathPart];
    });

    cursor[lastPathPart ?? ''] = callback(cursor[lastPathPart ?? '']);
};

const timeToNumber = (time: string) => {
    const parts = time.split(':').map((i) => parseInt(i));

    return parts[0] + parts[1] / 60;
};
