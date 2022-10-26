import start from './start';
import { tasks } from '@gdi/store-tasks';
import { take, fork } from 'saga-ts';
import { PlatformLifeCycleEvents } from '@gdi/platformer';

function* root() {
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(start);

    for (let saga of tasks.sagas) {
        yield* fork(saga);
    }
}

export const appSagas = [root];
