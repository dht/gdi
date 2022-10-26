import { delay, fork, put } from 'saga-ts';

export function* start() {
    yield delay(0);
    yield put({ type: 'BLKR_API_ROOT' });
}

export function* root() {
    yield delay(10);
    yield* fork(start);
}

export default root;
