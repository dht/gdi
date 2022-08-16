import { delay, fork, put, take } from 'saga-ts';

function* register() {
    yield take('REGISTER');
    console.log('register ->', true);
}

export function* root() {
    yield* fork(register);
}
