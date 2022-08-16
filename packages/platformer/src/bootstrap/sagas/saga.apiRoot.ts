import { actions } from '../../stores/platform/actions';
import { delay, put, fork } from 'saga-ts';
import { SagaEvents } from '../../types';

export function* apiRoot(): any {
    try {
        yield put(actions.timeStart('fetching data'));
        yield put(actions.timeEnd(true));

        yield put({ type: SagaEvents.API_ROOT_DONE });
    } catch (err) {
        console.log('err ->', err);

        yield put(actions.sagaError('apiRoot', err));
    }
}

export function* root() {
    yield delay(10);
    yield* fork(apiRoot);
}

export default root;
