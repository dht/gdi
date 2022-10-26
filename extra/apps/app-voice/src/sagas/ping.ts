import { delay, fork } from 'saga-ts';

export function* ping() {
    yield delay(0);
}

export function* root() {
    yield delay(10);
    yield* fork(ping);
}

export default root;
