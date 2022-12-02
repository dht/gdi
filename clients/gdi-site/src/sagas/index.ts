import { fork } from 'saga-ts';
import { root as apiPublic } from './saga.api.public';
import { root as analytics } from './saga.analytics.site';

function* root() {
    yield* fork(apiPublic);
    yield* fork(analytics);
}

export const siteSagas = [root];
