import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as api } from './saga.api';
import { root as elements } from './saga.elements';
import { PlatformLifeCycleEvents } from '@gdi/platformer';

function* root() {
    // yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(api);
    yield* fork(elements);
    yield* fork(ping);
}

export const appSagas = [root];
