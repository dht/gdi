import { actions } from '../store';
import { call, takeEvery } from 'saga-ts';
import { authChangeChannel } from './channels/channel.authChange';
import { fork, put } from 'redux-saga/effects';
import { PlatformLifeCycleEvents } from '@gdi/types';
import { $s, invokeEvent, setBoolean } from 'shared-base';
import { toast } from '@gdi/web-ui';
import { firebase } from '@gdi/platformer';

type Action = {
    type: 'AUTHENTICATION_COMPLETED';
    user: Json;
};

function* initAnalytics(action: Action) {
    const { user } = action;
    const { uid, displayName, email, emailVerified } = user;

    firebase.setUserId(uid);
    firebase.setUserProperties({ email, displayName, emailVerified });
    firebase.log('login', { method: 'google' });
}

export function* root() {
    yield takeEvery(
        PlatformLifeCycleEvents.AUTHENTICATION_COMPLETED,
        initAnalytics
    );
}
