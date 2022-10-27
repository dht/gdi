import { take, fork } from 'saga-ts';
import { root as api } from './saga.api';
import { root as lifecycle } from './saga.lifecycle';
import { root as estimations } from './saga.estimations';
import { root as speech } from './saga.speech';
import { root as pie } from './saga.pie';

import { PlatformLifeCycleEvents } from '@gdi/platformer';

function* root() {
    yield take(PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED);
    yield* fork(api);
    yield* fork(lifecycle);
    yield* fork(estimations);
    yield* fork(speech);
    yield* fork(pie);
}

export const appSagas = [root];
