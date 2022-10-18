import { root as account } from './saga.account';
import { root as apiRoot } from './saga.apiRoot';
import { root as bootstrap } from './saga.bootstrap';
import { root as navigate } from './saga.navigate';
import { root as toast } from './saga.toast';
import { delay, fork, put } from 'saga-ts';
import { root as login } from './saga.login';
import { root as register } from './saga.register';

function* root() {
    yield* fork(toast);
    yield* fork(account);
    yield* fork(apiRoot);
    yield* fork(bootstrap);
    yield* fork(navigate);
    yield* fork(login);
    yield* fork(register);

    yield delay(1000);
    yield put({ type: 'PROMPT' });
}

export const sagas = [root];
