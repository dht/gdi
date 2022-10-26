import {
    generateReducersForStore,
    generateActionsForStore,
} from 'redux-store-generator';
import { IChartMode, IPeriodMode, ISoundboardStore } from './types';

export const initialState: ISoundboardStore = {
    appStateSoundboard: {
        stateKey: 'soundboard',
        hoverDate: '',
        hoverWeek: '',
        periodMode: IPeriodMode.byWeeks,
        charMode: IChartMode.all,
        startYear: 2022,
        startWeek: 42,
        quarter: 1,
        week: 42,
        day: 0,
        year: 2022,
        dailyHours: 12.75,
        weeklyHours: 12.75 * 7,
        quarterlyHours: 12.75 * 7 * 13,
    },
    appStateScheduler: {
        isDayTime: true,
        day: 0,
        time: '08:30',
        timeDeltaInMinutes: 0,
    },
    currentIdsSoundboard: {
        projectId: '',
        projectKey: '',
    },
    actualManas: {
        '1': {
            id: '1',
            date: '2022-05-24',
            minutes: 12,
            projectKey: 'BLKR',
        },
        '2': {
            id: '2',
            date: '2022-05-23',
            minutes: 35,
            projectKey: 'BLKR',
        },
        '3': {
            id: '3',
            date: '2022-05-22',
            minutes: 11,
            projectKey: 'NOUR',
        },
        '4': {
            id: '4',
            date: '2022-05-25',
            minutes: 240,
            projectKey: 'NOUR',
        },
    },
    expectedManas: {
        '1': {
            id: '1',
            date: '2022-05-24',
            minutes: 20,
            projectKey: 'BLKR',
        },
        '2': {
            id: '2',
            date: '2022-05-23',
            minutes: 20,
            projectKey: 'BLKR',
        },
        '3': {
            id: '3',
            date: '2022-05-22',
            minutes: 20,
            projectKey: 'NOUR',
        },
        '4': {
            id: '4',
            date: '2022-05-22',
            minutes: 20,
            ticketKey: 'NOUR-8',
        },
    },
    scheduleBlocks: {
        '08:30': {
            id: '08:30',
            startTime: '08:30',
            minutes: 45,
        },
        '09:15': {
            id: '09:15',
            startTime: '09:15',
            minutes: 30,
            isFullWidth: true,
            title: 'First break + breakfast',
        },
    },
    scheduleSessions: {
        'w1-d1-2022-09:15': {
            id: 'w1-d1-2022-09:15',
            day: 1,
            week: 1,
            year: 2022,
            blockKey: '08:30',
            projectKey: 'NOUR',
            ticketKey: 'NOUR-8',
        },
    },
};

export const reducers =
    generateReducersForStore<ISoundboardStore>(initialState);
export const actions = generateActionsForStore<ISoundboardStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.actualManas.setAll({}));
        store.dispatch(actions.expectedManas.setAll({}));
        store.dispatch(actions.scheduleSessions.setAll({}));
        store.dispatch(actions.scheduleBlocks.setAll({}));
    });
};
