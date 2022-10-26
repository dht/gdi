import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';

function* api() {
    const promises = [yield* put(actions.appStateVoice.get())];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(api);
}
