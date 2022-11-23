import { StoreStructure } from 'redux-store-generator';

export type IBibloStore = StoreStructure & {
    meta: IGdiMeta;
    appStateBiblo: IBibloState;
    readCategories: IReadCategories;
    interestingReads: IReads;
};

export type IBibloState = {
    stateKey: string;
    currentNodeId: string;
};

export type IReadCategory = {
    id: string;
    name: string;
};

export type IRead = {
    id: string;
    name: string;
    url?: string;
    category: string;
    description?: string;
    revisitDate: string;
    revisitMood?: string;
    readTotalSize?: number;
    readCurrentLocation?: number;
    readSizeUnits?: 'pages' | 'minutes' | 'hours';
};

export type IMetaphor = {
    id: string;
    noun: string;
    description: string;
};

export type IReadCategories = Record<string, IReadCategory>;
export type IReads = Record<string, IRead>;
export type IMetaphors = Record<string, IMetaphor>;
