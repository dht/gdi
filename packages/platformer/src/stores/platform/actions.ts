import { initialState, IPlatformStore } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { SagaEvents } from '../../types';

let index = 1;

const generatedActions = generateActionsForStore<IPlatformStore>(initialState);

const sessionStartTs = new Date().getTime();
const ts = () => new Date().getTime() - sessionStartTs;

const log = (message: string, isRunning?: boolean) =>
    generatedActions.logs.push({
        id: String(index++),
        message,
        ts: ts(),
        isRunning,
    });

const timeStart = (message: string) => log(message, true);

const timeEnd = (success?: boolean, error?: string, data?: Json) =>
    generatedActions.logs.push({
        referenceId: String(index - 1),
        id: String(index++),
        message: '',
        ts: ts(),
        isRunning: false,
        success,
        error,
        data,
    });

const sagaError = (sagaId: string, error: any) => {
    return {
        type: SagaEvents.SAGA_ERROR,
        sagaId,
        error,
    };
};

const goBack = () => {
    return {
        type: 'NAVIGATE_BACK',
    };
};

export const actions = {
    ...generatedActions,
    sagaError,
    log,
    timeStart,
    timeEnd,
    goBack,
};
