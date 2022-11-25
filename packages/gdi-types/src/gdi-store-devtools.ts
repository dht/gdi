// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A3 = {};

declare global {
    export type IDevtoolsStore = StoreStructure & {
        meta: IGdiMeta;
        appStateDevtools: IDevtoolsState;
    };

    export type IDevtoolsState = {
        stateKey: string;
        currentNodeId: string;
        isOn: boolean;
    };
}
