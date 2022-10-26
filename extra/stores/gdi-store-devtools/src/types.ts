import type { StoreStructure } from 'redux-store-generator';

export type IDevtoolsStore = StoreStructure & {
    appStateDevtools: IDevtoolsState;
    stores: IStores;
};

export type IDevtoolsState = {
    stateKey: string;
    currentNodeId: string;
    isOn: boolean;
};

export type IStore = {
    id: string;
    color: string;
};

export type IStores = Record<string, IStore>;
