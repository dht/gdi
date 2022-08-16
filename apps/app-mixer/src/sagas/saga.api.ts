import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';

function* api() {
    const promises = [
        yield* put(actions.appStateMixer.get()),
        yield* put(actions.instances.get({})),
        yield* put(actions.widgets.get({})),
        yield* put(actions.instancesProps.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(api);
}
