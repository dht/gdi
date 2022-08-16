import {
    generateReducersForStore,
    generateActionsForStore,
} from 'redux-store-generator';
import type { StoreStructure, Action } from 'redux-store-generator';
import { IPlatformState } from './types';
import { actions } from './actions';
import { ILogs } from '../../types';

export type IPlatformStore = StoreStructure & {
    appStatePlatform: IPlatformState;
    logs: ILogs;
    _lastAction: Action;
};

export const initialState: IPlatformStore = {
    appStatePlatform: {
        apiUrl: `http://${document.location.hostname}:3001`,
        isRootLoading: false,
    },
    logs: [
        {
            id: '1',
            ts: 0,
            message: '',
        },
    ],
    _lastAction: {
        type: '',
    },
};

const _lastAction = (state: Action = { type: '' }, action: Action) => action;

export const reducers = {
    ...generateReducersForStore<IPlatformStore>(initialState),
    _lastAction,
};

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.logs.setAll([]));
    });
    return store;
};
