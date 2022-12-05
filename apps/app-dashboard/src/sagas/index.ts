import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as apiPrivate } from './saga.api.private';
import { root as statClick } from './saga.statClick';
import { root as inbox } from './saga.inbox';
import { PlatformLifeCycleEvents } from '@gdi/types';

function* root() {
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(apiPrivate);
    yield* fork(statClick);
    yield* fork(inbox);
    yield* fork(ping);
}

export const appSagas = [root];
