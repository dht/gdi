import { delay, put, fork } from 'saga-ts';
import { actions } from '../store';

export function* api() {
    const promises = [
        yield* put(actions.appStateScheduler.get()),
        yield* put(actions.actualManas.get({})),
        yield* put(actions.expectedManas.get({})),
        yield* put(actions.scheduleBlocks.get({})),
        yield* put(actions.scheduleSessions.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(api);
}

export default root;
