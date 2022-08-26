import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';

function* apiPrivate() {
    const promises = [
        yield* put(actions.appStateMixer.get()),
        yield* put(actions.libraryBlocks.get({})),
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
