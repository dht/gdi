import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';
import { loadWorkBoard } from './saga.babylon';

function* api() {
    const promises = [
        yield* put(actions.assets.get({})),
        yield* put(actions.buildings.get({})),
        yield* put(actions.boards.get({})),
        yield* put(actions.cameras.get({})),
        yield* put(actions.grounds.get({})),
        yield* put(actions.studioItems.get({})),
        yield* put(actions.lights.get({})),
        yield* put(actions.particles.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
    yield* fork(loadWorkBoard);
}

export function* root() {
    yield delay(300);
    yield* fork(api);
}
