import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPrivate() {
    $s('apiPrivate', {
        nodes: ['stats', 'statsJourneys', 'inboxMessages'],
    });

    const promises = [
        yield* put(actions.stats.get({})),
        yield* put(actions.statsJourneys.get({})),
        yield* put(actions.inboxMessages.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPrivate);
}
