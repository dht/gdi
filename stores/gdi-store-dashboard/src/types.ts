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
    showNotifications: boolean;
    showReader: boolean;
    readerUrl: string;
    showQuickTip: boolean;
    quickTipUrl: string;
    showMainDisplay: boolean;
    mainDisplayData: Json;
    showMiniApp: boolean;
    miniAppData: Json;
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
    goal?: number;
    journey?: IStatJourney[];
    color?: string;
    iconName?: string;
};

export type IStatJourney = {
    id: string;
    statId: string;
    date: string;
    value: number;
    percent?: number;
};

type InboxMessageType = 'info' | 'quickTip' | 'reader' | 'interrupt';

export type IInboxMessage = {
    id: string;
    date: string;
    title: string;
    description: string;
    iconName?: string;
    iconLogoUrl?: string;
    iconLogoIsDark?: boolean;
    color?: string;
    messageType: InboxMessageType;
    itemType?: ItemType;
    itemId?: string;
    isArchived?: boolean;
    snoozeUntil?: string;
    tags?: string[];
    domain?: string;
    domainSemantic?: string;
    serviceName?: string;
    ctaUrl?: string;
    contentUrl?: string;
    wasSeen?: boolean;
    wasAcknowledged?: boolean;
};

export type IInboxMessages = Record<string, IInboxMessage>;

export type IStats = Record<string, IStat>;

export type IStatJourneys = Record<string, IStatJourney>;
