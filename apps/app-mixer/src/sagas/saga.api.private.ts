import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPrivate() {
    $s('apiPrivate', {
        nodes: [
            'appStateMixer',
            'libraryWidgets',
            'libraryImages',
            'libraryInstances',
            'libraryInstancesProps',
            'libraryPages',
            'libraryPageInstances',
            'libraryPalettes',
            'libraryTypography',
            'locales',
            'packages',
            'siteProperties',
        ],
    });

    const promises = [
        yield* put(actions.appStateMixer.get()),
        yield* put(actions.libraryWidgets.get({})),
        yield* put(actions.libraryImages.get({})),
        yield* put(actions.libraryInstances.get({})),
        yield* put(actions.libraryInstancesProps.get({})),
        yield* put(actions.libraryPages.get({})),
        yield* put(actions.libraryPageInstances.get({})),
        yield* put(actions.libraryPalettes.get()),
        yield* put(actions.libraryTypography.get({})),
        yield* put(actions.locales.get({})),
        yield* put(actions.packages.get({})),
        yield* put(actions.siteProperties.get()),
        yield* put(actions.datasets.get()),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPrivate);
}
