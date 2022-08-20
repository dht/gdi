import { actions } from '../store';
import { delay, fork, takeEvery } from 'saga-ts';
import { authChangeChannel } from './channels/channel.authChange';
import { put } from 'redux-saga/effects';
import { firebase } from '@gdi/platformer';

function* logout(_action: any) {
    console.log('1 ->', 11);
    firebase.signOut();
    console.log('1 ->', 1);
}

export function* root() {
    yield takeEvery('LOGOUT', logout);
}
