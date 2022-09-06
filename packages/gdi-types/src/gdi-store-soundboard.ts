// AUTO-GENERATED

export const A7 = {};

declare global {
    export type ISoundboardStore = {
        appStateSoundboard: ISoundboardState;
        appStateScheduler: ISchedulerState;
        expectedManas: IManas;
        actualManas: IManas;
        scheduleBlocks: IScheduleBlocks;
        scheduleItems: IScheduleItems;
        weatherLocations: IWeatherLocations;
        weatherHourlyItems: IWeatherHourlyItems;
        weatherDailyItems: IWeatherDailyItems;
    };

    export type ISoundboardState = {
        stateKey: string;
        selectedProjectKey: string;
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

    export type IScheduleItem = {
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
    export type IScheduleItems = Dictionary<IScheduleItem>;

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

    export type GroupedScheduleItems = {
        [day: string]: {
            [hour: string]: {
                scheduleItem: IScheduleItem;
                ticket: ITicket;
                project: IProject;
            };
        };
    };

    export type DayAndTime = {
        day: number;
        time: string;
    };

    type Temperature = {
        value: number;
        unit: string;
        unitType: number;
    };

    type WeatherIcon = {
        icon: number;
        iconPhrase: string;
        hasPrecipitation: boolean;
        precipitationChance?: number;
    };

    export type IWeatherLocation = {
        id: string;
        key: string;
        name: string;
        country: string;
        latitude: number;
        longitude: number;
    };

    export type IWeatherHourlyItem = {
        id: string;
        identifier: string;
        locationKey: string;
        dateTime: string;
        day: number;
        week: number;
        year: number;
        hour: string;
        temperature: Temperature;
        icon: WeatherIcon;
        isDaylight: boolean;
    };

    export type IWeatherDailyItem = {
        id: string;
        identifier: string;
        locationKey: string;
        dateTime: string;
        day: number;
        week: number;
        year: number;
        temperatureMinimum: Temperature;
        temperatureMaximum: Temperature;
        iconDay: WeatherIcon;
        iconNight: WeatherIcon;
    };

    export type IWeatherLocations = Record<string, IWeatherLocation>;
    export type IWeatherHourlyItems = Record<string, IWeatherHourlyItem>;
    export type IWeatherDailyItems = Record<string, IWeatherDailyItem>;

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
