import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPrivate() {
    $s('apiPrivate', {
        nodes: ['appStateFactory', 'layouts'],
    });

    const promises = [
        yield* put(actions.appStateFactory.get()),
        yield* put(actions.layouts.get({})),
        yield* put(actions.articles.get({})),
        yield* put(actions.articleCategories.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPrivate);
}
