import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as login } from './saga.login';
import { root as logout } from './saga.logout';
import { PlatformLifeCycleEvents } from '@gdi/platformer';

function* root() {
    yield* fork(login);
    yield* fork(logout);
    yield* fork(ping);
}

export const appSagas = [root];
