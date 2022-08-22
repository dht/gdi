import { actions } from '../store';
import { call, delay, fork, takeEvery } from 'saga-ts';
import { authChangeChannel } from './channels/channel.authChange';
import { put } from 'redux-saga/effects';

const REQUESTED_PATH_KEY = 'REQUESTED_PATH';

function* authChange({ user }: any) {
    console.log('user ->', user);

    if (!user) {
        yield put(
            actions.authState.patch({
                isLoggedIn: false,
            })
        );

        yield call(navigateToLogin);

        return;
    }

    yield put(
        actions.authState.patch({
            isLoggedIn: true,
        })
    );

    const { uid, displayName, email, emailVerified, phoneNumber, photoURL } =
        user;

    yield put(
        actions.user.patch({
            uid,
            displayName,
            email,
            emailVerified,
            phoneNumber,
            photoURL,
        })
    );

    yield put({
        type: 'SHOW_TOAST',
        message: `Logged in as ${displayName}`,
        flavour: 'success',
    });

    const to = localStorage.getItem(REQUESTED_PATH_KEY) || '/';
    yield* call(navigate, to);
}

function* navigateToLogin() {
    const { pathname } = document.location;
    localStorage.setItem(REQUESTED_PATH_KEY, pathname);
    yield put({ type: 'NAVIGATE', path: '/login' });
}

function* navigate(to: string) {
    localStorage.removeItem(REQUESTED_PATH_KEY);
    yield put({ type: 'NAVIGATE', path: to });
}

export function* root() {
    const channel = authChangeChannel();
    yield takeEvery(channel, authChange);
}
