import { SocketConfig } from './../types';
import { reduxStore, reduxStoreId } from './store';
import { isServerConfig } from '../types';
import { log } from './log';

const REMOTE_ACTION_TYPE = 'action';
let broadcaster: any;
let emitter: any;

export let isSocketServer: boolean = false;

export const initSockets = (config: SocketConfig) => {
    if (isServerConfig(config)) {
        broadcaster = config.broadcast;
        isSocketServer = true;
    } else {
        emitter = config.emit;
        isSocketServer = false;
    }

    if (typeof config.on === 'function') {
        config.on(REMOTE_ACTION_TYPE, (action: any) => {
            if (!reduxStore) {
                log('store is not ready yet');
                return;
            }

            log(`receiving action ${action.type} from ${action.storeId}`);

            const isBoomerang = action.storeId === reduxStoreId;
            if (isBoomerang) {
                log(
                    'skipping dispatch, remote action originated on this store'
                );
                return;
            }

            reduxStore.dispatch(action);
        });
    }
};

export const emit = (eventName: string, data: Json) => {
    if (!emitter || typeof emitter !== 'function') {
        log(`${reduxStoreId}: emitter not ready yet`);
        return;
    }

    return emitter(eventName, data);
};

export const broadcast = (eventName: string, data: Json) => {
    if (!broadcaster || typeof broadcaster !== 'function') {
        log(`${reduxStoreId}: broadcaster not ready yet`);
        return;
    }

    return broadcaster(eventName, data);
};

export const remoteAction = (action: any) => {
    const method = isSocketServer ? broadcast : emit;

    const actionStoreId = action.storeId || reduxStoreId;

    const response = method(REMOTE_ACTION_TYPE, {
        ...action,
        isRemote: true,
        storeId: actionStoreId,
    });

    if (response !== false) {
        log(`sending action ${action.type} (${actionStoreId})`);
    }
};
