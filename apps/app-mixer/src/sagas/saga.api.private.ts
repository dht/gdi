import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPrivate() {
    $s('apiPrivate', {
        nodes: [
            'appStateMixer',
            'libraryWidgets',
            'libraryImages',
            'libraryPalettes',
            'libraryTypography',
            'locales',
            'packages',
        ],
    });

    const promises = [
        yield* put(actions.appStateMixer.get()),
        yield* put(actions.libraryWidgets.get({})),
        yield* put(actions.libraryImages.get({})),
        yield* put(actions.libraryPalettes.get({})),
        yield* put(actions.libraryTypography.get({})),
        yield* put(actions.locales.get({})),
        yield* put(actions.packages.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPrivate);
}
