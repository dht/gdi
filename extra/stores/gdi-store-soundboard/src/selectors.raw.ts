import { createSelector } from 'reselect';
import { ISoundboardStore } from './types';
import { NowInfo } from './types';
import { tasks } from '@gdi/store-tasks';
import { calculateUTC, XDate } from '@gdi/language';

export const $i = (state: { soundboard: ISoundboardStore }) => state.soundboard;
const $n = (): null => null;
const $o = (): void => {};

const tasksSelectors = tasks.selectors;
export const $rawProjects = tasksSelectors.raw.$rawProjects;
export const $rawTickets = tasksSelectors.raw.$rawTickets;
export const $rawWorklogs = tasksSelectors.raw.$rawWorklogs;

export const $rawSoundboardState = createSelector($i, (state: ISoundboardStore) => state.appStateSoundboard); // prettier-ignore
export const $rawSchedulerState = createSelector($i, (state: ISoundboardStore) => state.appStateScheduler); // prettier-ignore
export const $rawActualManas = createSelector($i, (state) => state.actualManas);
export const $rawExpectedManas = createSelector($i, (state) => state.expectedManas); // prettier-ignore
export const $rawScheduleBlocks = createSelector($i, (state) => state.scheduleBlocks); // prettier-ignore
export const $rawScheduleSessions = createSelector($i, (state) => state.scheduleSessions); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state) => state.currentIdsSoundboard); // prettier-ignore

export const $now = createSelector($rawSchedulerState, (appState) => {
    const { timeDeltaInMinutes } = appState;
    let now = new XDate();

    const utc = calculateUTC(timeDeltaInMinutes);

    let isAlternativeNow = !!timeDeltaInMinutes;

    if (isAlternativeNow) {
        now.add(timeDeltaInMinutes, 'minute');
    }
    const info = now.toInfo();

    if (!info) {
        return null;
    }

    return {
        week: info.week,
        day: info.dayOfWeek,
        year: info.year,
        dayOfWeekName: info.dayOfWeekName,
        shortDateText: info.dateShortString,
        isAlternativeNow,
        timeDeltaInMinutes,
        ...utc,
    } as NowInfo;
});
