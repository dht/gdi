import { fork } from 'saga-ts';
import { root as account } from './saga.account';
import { root as apiRoot } from './saga.apiRoot';
import { root as bootstrap } from './saga.bootstrap';
import { root as analytics } from './saga.analytics.admin';
import { root as navigate } from './saga.navigate';
import { root as services } from './saga.services';
import { root as toast } from './saga.toast';

function* root() {
    yield* fork(toast);
    yield* fork(account);
    yield* fork(apiRoot);
    yield* fork(bootstrap);
    yield* fork(navigate);
    yield* fork(analytics);
    yield* fork(services);
}

export const sagas = [root];
