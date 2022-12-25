import { delay, fork, put } from 'saga-ts';

function* api() {
    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(api);
}
