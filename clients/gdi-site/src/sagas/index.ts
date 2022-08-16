import { fork } from 'saga-ts';
import { root as apiPublic } from './saga.api.public';

function* root() {
    yield* fork(apiPublic);
}

export const siteSagas = [root];
