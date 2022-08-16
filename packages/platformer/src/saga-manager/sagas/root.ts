import * as actions from '../store/actions';
import { ActionTypes } from '../../types';
import { call, put, takeEvery } from 'saga-ts';
import { config } from '../utils/globals';
import { onStart, startSaga } from './startSaga';
import { stopSaga } from './stopSaga';

export function* rootSaga() {
    yield* call(onStart, 'root');
    yield takeEvery(ActionTypes.SAGA_START, startSaga);
    yield takeEvery(ActionTypes.SAGA_STOP, stopSaga);

    const sagasIds = config.autoStartAll
        ? Object.keys(config.sagas)
        : config.autoStart || [];

    for (let sagaId of sagasIds) {
        yield put(actions.startSaga(sagaId));
    }
}
