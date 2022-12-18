import { takeEvery } from 'saga-ts';
import { PlatformLifeCycleEvents } from '@gdi/types';
import { firebase } from '@gdi/platformer';

type ActionInit = {
    type: 'AUTHENTICATION_COMPLETED';
    user: Json;
};

function* initAnalytics(action: ActionInit) {
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
