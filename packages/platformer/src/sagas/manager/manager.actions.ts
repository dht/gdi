import initialState from './manager.initialState';
import { ActionTypes, SagaAction, SagaStore } from '../../types';
import { generateActionsForStore } from 'redux-store-generator';

export const startSaga = (sagaId: string): SagaAction => {
    return {
        type: ActionTypes.SAGA_START,
        sagaId,
    };
};

export const stopSaga = (sagaId: string): SagaAction => {
    return {
        type: ActionTypes.SAGA_START,
        sagaId,
    };
};

export const actions = generateActionsForStore<SagaStore>(initialState);
