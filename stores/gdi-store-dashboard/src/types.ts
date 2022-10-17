import type { StoreStructure } from 'redux-store-generator';

export type IDashboardStore = StoreStructure & IDashboardStructure & {};

export type IDashboardStructure = {
    dashboard: IDashboard;
    stats: IStats;
    statsJourneys: IStatJourneys;
};

export type IDashboard = {
    stateKey: string;
    openTasks: number;
};

export type IStat = {
    id: string;
    title: string;
    value: number;
    href: string;
    suffix?: string;
    order: number;
    mode: 'manual' | 'auto';
    clickEffect?: 'nudge' | 'value';
    unit: 'currency' | 'number' | 'time';
    journey?: IStatJourney[];
};

export type IStatJourney = {
    id: string;
    statId: string;
    date: string;
    value: number;
    percent?: number;
};

export type IStats = Record<string, IStat>;

export type IStatJourneys = Record<string, IStatJourney>;
