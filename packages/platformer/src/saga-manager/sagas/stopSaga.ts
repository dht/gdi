import { actions } from '../store/actions';
import { call, cancel, put } from 'saga-ts';
import { config, instances } from '../utils/globals';
import { SagaAction } from '../../types';
import { ts } from '../utils/date';

export function* stopSaga(action: SagaAction) {
    const { sagaId } = action;

    if (!config.sagas[sagaId]) {
        config.logger.log(`SAGA_STOP: could not find saga "${sagaId}"`);
        return;
    }

    if (!instances[sagaId]) {
        config.logger.log(`SAGA_STOP: saga "${sagaId}" is not running`);
        return;
    }

    yield cancel(instances[sagaId]);
    delete instances[sagaId];

    yield* call(onStop, sagaId);
}

function* onStop(sagaId: string) {
    yield put(
        actions.sagas.patch(sagaId, {
            stoppedTs: ts(),
        })
    );
}
