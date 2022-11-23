import type { StoreStructure } from 'redux-store-generator';

export type IDashboardStore = StoreStructure & IDashboardStructure & {};

export type IDashboardStructure = {
    meta: IGdiMeta;
    appStateDashboard: IAppStateDashboard;
    currentIdsDashboard: ICurrentIdsDashboard;
    stats: IStats;
    statsJourneys: IStatJourneys;
    inboxMessages: IInboxMessages;
};

export type IAppStateDashboard = {
    stateKey: string;
};

export type ICurrentIdsDashboard = {
    inboxMessageId: string;
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

type InboxMessageType = 'info';

export type IInboxMessage = {
    id: string;
    date: string;
    title: string;
    description: string;
    iconName?: string;
    color?: string;
    messageType: InboxMessageType;
    itemType?: ItemType;
    itemId?: string;
    href?: string;
    isArchived?: boolean;
    snoozeUntil?: string;
};

export type IInboxMessages = Record<string, IInboxMessage>;

export type IStats = Record<string, IStat>;

export type IStatJourneys = Record<string, IStatJourney>;
