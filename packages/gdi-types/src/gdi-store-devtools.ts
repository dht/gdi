// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A3 = {};

declare global {
    export type IDevtoolsStore = StoreStructure & {
        appStateDevtools: IDevtoolsState;
        stores: IStores;
        nodes: INodes;
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

    export type INode = {
        id: string;
        store: string;
        nodeType: string;
        fieldTypes: Record<string, string>;
        isHidden?: boolean;
    };

    export type INodes = Record<string, INode>;

    export type INodeWithColor = INode & {
        color: string;
    };
}
