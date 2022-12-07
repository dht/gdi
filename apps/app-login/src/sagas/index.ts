import ping from './ping';
import { fork, take } from 'saga-ts';
import { PlatformLifeCycleEvents } from '@gdi/types';
import { root as login } from './saga.login';
import { root as logout, rootDemo as logoutDemo } from './saga.logout';
import { root as api } from './saga.api.private';
import { root as analytics } from './saga.analytics';
import { root as demo } from './saga.demo';
import { setBoolean } from 'shared-base';

type ActionAuthStart = {
    type: PlatformLifeCycleEvents.AUTHENTICATION_START;
    demoMode?: boolean;
};

function* root() {
    setBoolean('AUTHENTICATION_COMPLETED', false);

    const action: ActionAuthStart = yield take(PlatformLifeCycleEvents.AUTHENTICATION_START); // prettier-ignore
    const { demoMode } = action;

    yield* fork(login);
    yield* fork(api);
    yield* fork(demoMode ? logoutDemo : logout);
    yield* fork(analytics);
    yield* fork(ping);

    if (demoMode) {
        yield* fork(demo);
    }
}

export const appSagas = [root];
