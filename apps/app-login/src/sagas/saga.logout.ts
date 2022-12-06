import { takeEvery } from 'saga-ts';
import { firebase } from '@gdi/platformer';
import { invokeEvent } from 'shared-base';

function* logout(_action: any) {
    firebase.signOut();
}

export function* root() {
    yield takeEvery('LOGOUT', logout);
}

function* logoutDemo(_action: any) {
    invokeEvent('demoAuthChange', {
        user: null,
    });
}

export function* rootDemo() {
    yield takeEvery('LOGOUT', logoutDemo);
}
