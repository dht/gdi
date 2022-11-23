import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPublic() {
    $s('apiPublic', {
        nodes: [
            'widgets',
            'fonts',
            'breakpoints',
            'instance',
            'instanceProps',
            'pages',
            'palette',
            'datasets',
        ],
    });

    const promises = [
        yield* put(actions.widgets.get({})),
        yield* put(actions.fonts.get()),
        yield* put(actions.instances.get({})),
        yield* put(actions.instancesProps.get({})),
        yield* put(actions.pages.get({})),
        yield* put(actions.palette.get()),
        yield* put(actions.datasets.get()),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPublic);
}
