import { SyncNodes } from '../types';

export let reduxActions: any;
export let reduxStore: any;
export let reduxStoreId = '';
export let reduxSyncNodes: SyncNodes = {
    patch: [],
    setAll: [],
};

export const setSyncedStore = (
    store: any,
    actions?: any,
    syncNodes?: SyncNodes
) => {
    reduxStore = store;
    reduxActions = actions;

    if (syncNodes) {
        reduxSyncNodes = syncNodes;
    }
};

export const setSyncedStoreName = (storeId: string) => {
    reduxStoreId = storeId;
};
