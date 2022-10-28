// AUTO-GENERATED

import { StoreStructure } from 'redux-store-generator';

export const A11 = {};

declare global {
    export type IEventsStore = StoreStructure & {
        appStateEvents: IEventsState;
        events: IEvents;
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
        tags?: string[];
    };

    export type IEvents = Record<string, IEvent>;
}
