import { actions } from '../store/actions';
import { call, fork, put } from 'saga-ts';
import { config, instances } from '../utils/globals';
import { SagaAction } from '../../types';

import { ts } from '../utils/date';

export function* startSaga(action: SagaAction) {
    const { sagaId } = action;

    if (!config.sagas[sagaId]) {
        config.logger.log(`SAGA_START: could not find saga "${sagaId}"`);
        return;
    }

    try {
        const saga = config.sagas[sagaId];
        instances[sagaId] = yield* fork(saga);
        yield* call(onStart, sagaId);
    } catch (err: any) {
        yield* call(onError, sagaId, err.message);
    }
}

export function* onStart(sagaId: string) {
    yield put(
        actions.sagas.patch(sagaId, {
            startTs: ts(),
        })
    );
}

function* onError(sagaId: string, error: string) {
    yield put(
        actions.sagas.patch(sagaId, {
            ErrorTs: ts(),
            error,
        })
    );

    if (config.onError) {
        yield* call(config.onError, sagaId, error);
    }
}
