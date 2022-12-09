import { StoreStructure } from 'redux-store-generator';

export type IEventsStore = StoreStructure & {
    meta: IGdiMeta;
    appStateEvents: IEventsState;
    events: IEvents;
    reminders: IReminders;
};

export type IEventsState = {
    stateKey: string;
    currentNodeId: string;
};

export type IEvent = {
    id: string;
    name: string;
    date?: string;
    location?: string;
    rating?: number;
    description?: string;
    link?: string;
    googleEventId?: string;
    imageUrl?: string;
    imageThumbUrl?: string;
    tags: string[];
    dataTags: string[];
};

export type IReminder = {
    id: string;
    title: string;
    description?: string;
    date: string;
    itemType: ItemType;
    itemId: string;
    isCompleted?: boolean;
    snoozeUntil?: string;
    tags: string[];
    dataTags: string[];
};

export type IEvents = Record<string, IEvent>;
export type IReminders = Record<string, IReminder>;
