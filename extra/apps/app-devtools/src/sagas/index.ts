import ping from './ping';
import { take, fork } from 'saga-ts';
import { PlatformLifeCycleEvents } from '@gdi/platformer';

function* root() {
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(ping);
}

export const appSagas = [root];
