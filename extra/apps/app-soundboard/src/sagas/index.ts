import { root as init } from './saga.init';
import { root as api } from './saga.api';
import { root as tweak } from './saga.tweak';
import { root as schedule } from './saga.schedule';
import { root as ping } from './saga.ping';
import { fork, take } from 'saga-ts';
import { PlatformLifeCycleEvents } from '@gdi/platformer';

function* root() {
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(init);
    yield* fork(api);
    yield* fork(tweak);
    yield* fork(schedule);
    yield* fork(ping);
}

export const appSagas = [root];
