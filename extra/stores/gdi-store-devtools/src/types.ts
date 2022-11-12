import type { StoreStructure } from 'redux-store-generator';

export type IDevtoolsStore = StoreStructure & {
    appStateDevtools: IDevtoolsState;
};

export type IDevtoolsState = {
    stateKey: string;
    currentNodeId: string;
    isOn: boolean;
};
