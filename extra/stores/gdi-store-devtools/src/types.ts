import type { StoreStructure } from 'redux-store-generator';

export type IDevtoolsStore = StoreStructure & {
    meta: IGdiMeta;
    appStateDevtools: IDevtoolsState;
};

export type IDevtoolsState = {
    stateKey: string;
    currentNodeId: string;
    isOn: boolean;
};
