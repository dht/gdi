import { StoreStructure } from 'redux-store-generator';

export type IThingsStore = StoreStructure & {
    appStateThings: IThingsState;
    things: IThings;
};

export type IThingsState = {
    stateKey: string;
    currentMood: string;
    currentNodeId: string;
};

export type IThing = {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    imageThumbUrl: string;
    ratio: number;
    tags: string[];
    dataTags: string[];
};

export type IThings = Record<string, IThing>;
