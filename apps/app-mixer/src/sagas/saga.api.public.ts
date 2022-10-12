import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { $s } from 'shared-base';

function* apiPublic() {
    $s('apiPublic', {
        nodes: ['fonts', 'breakpoints', 'palette'],
    });

    const promises = [
        yield* put(actions.fonts.get()),
        yield* put(actions.palette.get()),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(apiPublic);
}
