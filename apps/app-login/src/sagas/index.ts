import ping from './ping';
import { call, fork, take } from 'saga-ts';
import { onLogin, root as login } from './saga.login';
import { root as logout } from './saga.logout';
import { root as api } from './saga.api.private';
import { PlatformLifeCycleEvents } from '@gdi/types';
import { setBoolean } from 'shared-base';

function* root() {
    setBoolean('AUTHENTICATION_COMPLETED', false);
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_START);
    yield* fork(login);
    yield* fork(api);
    yield* fork(logout);
    yield* fork(ping);

    yield call(onLogin, {
        uid: '1',
        displayName: 'Name',
        email: 'email',
        emailVerified: true,
        phoneNumber: '',
        photoURL: '',
    });
}

export const appSagas = [root];
