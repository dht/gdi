import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPublic() {
    $s('apiPublic', {
        nodes: [
            'blocks',
            'fonts',
            'instanceBlocks',
            'instanceProps',
            'pages',
            'palette',
        ],
    });

    const promises = [
        yield* put(actions.blocks.get({})),
        yield* put(actions.fonts.get()),
        yield* put(actions.instancesBlocks.get({})),
        yield* put(actions.instancesProps.get({})),
        yield* put(actions.pages.get({})),
        yield* put(actions.palette.get()),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPublic);
}
