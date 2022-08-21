import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';

function* api() {
    const promises = [
        yield* put(actions.appStateMixer.get()),
        yield* put(actions.instances.get({})),
        yield* put(actions.blocks.get({})),
        yield* put(actions.instancesProps.get({})),
        yield* put(actions.fonts.get()),
        yield* put(actions.palette.get()),
        yield* put(actions.pages.get({})),
        yield* put(actions.libraryImages.get({})),
        yield* put(actions.libraryBlocks.get({})),
        yield* put(actions.libraryTypography.get({})),
        yield* put(actions.libraryPalettes.get({})),
        yield* put(actions.locales.get({})),
        yield* put(actions.packages.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(api);
}
