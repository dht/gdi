// AUTO-GENERATED

export const A16 = {};

declare global {
    export type ISoundboardStore = {
        meta: IGdiMeta;
        appStateSoundboard: ISoundboardState;
        currentIdsSoundboard: ICurrentIdsSoundboard;
        appStateScheduler: ISchedulerState;
        expectedManas: IManas;
        actualManas: IManas;
        scheduleBlocks: IScheduleBlocks;
        scheduleSessions: IScheduleSessions;
    };

    export type ISoundboardState = {
        stateKey: string;
        hoverDate?: string;
        hoverWeek?: string;
        periodMode: IPeriodMode;
        charMode: IChartMode;
        startWeek: number;
        startYear: number;
        quarter: number;
        week: number;
        year: number;
        day: number;
        dailyHours: number;
        weeklyHours: number;
        quarterlyHours: number;
    };

    export type ICurrentIdsSoundboard = {
        projectId?: string;
        projectKey?: string;
    };

    export type ISchedulerState = {
        isDayTime: boolean;
        day: number;
        time: string;
        timeDeltaInMinutes: number;
    };

    export type IMana = {
        id: string;
        date: string;
        minutes: number;
        projectKey: string;
        ticketKey: string;
    };

    export type IScheduleBlock = {
        id: string;
        key: string;
        startTime: string;
        minutes: number;
        title?: string;
        isFullWidth?: boolean;
    };

    export type IScheduleSession = {
        id: string;
        key: string;
        day: number;
        week: number;
        year: number;
        title?: string;
        projectKey?: string;
        ticketKey?: string;
        blockKey?: string;
        isLocked?: boolean;
    };

    export enum IPeriodMode {
        byWeeks = 'byWeeks',
        byQuarters = 'byQuarters',
    }

    export enum IChartMode {
        single = 'single',
        all = 'all',
    }
    export enum IManaType {
        day = 'day',
        week = 'week',
        quarter = 'quarter',
        year = 'year',
        total = 'total',
    }

    export type IManas = Dictionary<IMana>;
    export type IScheduleBlocks = Dictionary<IScheduleBlock>;
    export type IScheduleSessions = Dictionary<IScheduleSession>;

    export type WeekPointer = {
        week: number;
        year: number;
        isCurrentWeek?: boolean;
        weekAndYear?: string;
    };

    export type DayData = {
        currentItem: number;
        currentItemTitles: Record<string, boolean>;
        otherItems: number;
        otherItemsTitles: Record<string, boolean>;
    };

    export type WeekTotal = {
        [projectKey: string]: number;
    };

    export type WeekData = {
        total: WeekTotal;
    } & {
        [day: string]: DayData;
    };

    export type GroupedMana = {
        byWeek: {
            [weekAndYear: string]: WeekData;
        };
        byProject: {
            [project: string]: {
                [dayOrWeek: string]: number;
            };
        };
    };

    export type HoursPerPeriod = {
        perDay: number;
        perWeek: number;
        perQuarter: number;
    };

    export type GroupedScheduleSessions = {
        [day: string]: {
            [hour: string]: {
                scheduleSession: IScheduleSession;
                ticket: ITicket;
                project: IProject;
            };
        };
    };

    export type DayAndTime = {
        day: number;
        time: string;
    };

    export type NowInfo = {
        week: number;
        day: number;
        year: number;
        hour: string;
        shortDateText: string;
        dayOfWeekName: string;
        isAlternativeNow: boolean;
        timeDeltaInMinutes?: number;
        alternativeUtc: string;
        alternativeCity: string;
        alternativeCityImageUrl: string;
        alternativeRadioUrl: string;
    };

    export type Dictionary<T> = Record<string, any>;
}
