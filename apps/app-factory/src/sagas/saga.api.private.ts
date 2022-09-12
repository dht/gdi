import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPrivate() {
    $s('apiPrivate', {
        nodes: ['appStateFactory', 'layouts', 'customBlocks'],
    });

    const promises = [
        yield* put(actions.appStateFactory.get()),
        yield* put(actions.customBlocks.get({})),
        yield* put(actions.layouts.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPrivate);
}
