import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPrivate() {
    $s('apiPrivate', {
        nodes: ['users', 'roles'],
    });

    const promises = [
        yield* put(actions.users.get({})),
        yield* put(actions.roles.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPrivate);
}
