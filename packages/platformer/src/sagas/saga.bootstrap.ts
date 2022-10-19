import { delay, put, fork } from 'saga-ts';

export function* bootstrap(): any {}

export function* root() {
    yield delay(0);
    yield* fork(bootstrap);
}

export default root;
