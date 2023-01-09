import { fork } from 'saga-ts';
import { root as apiPublic } from './saga.api.public';
import { root as analytics } from './saga.analytics.site';
import { root as balance } from './saga.balance';

function* root() {
    yield* fork(apiPublic);
    yield* fork(analytics);
    yield* fork(balance);
}

export const siteSagas = [root];
