import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPrivate() {
    $s('apiPrivate', {
        nodes: ['dashboard', 'stats', 'statsJourneys'],
    });

    const promises = [
        yield* put(actions.dashboard.get()),
        yield* put(actions.stats.get()),
        yield* put(actions.statsJourneys.get()),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPrivate);
}
