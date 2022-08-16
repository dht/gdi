import { actions } from '../../stores/auth/actions';
import { put, takeEvery } from 'saga-ts';
import { loginInstance } from '../../auth/initAuth';

type LoginAction = {
    type: 'LOGIN';
    data: {
        username: string;
        password: string;
    };
};

type GoogleProfile = {
    email: string;
    familyName: string;
    givenName: string;
    googleId: string;
    imageUrl: string;
    name: string;
};

type LoginWithGoogleAction = {
    type: 'LOGIN_WITH_GOOGLE';
    data: {
        code: string;
        isGoogle: boolean;
    };
};

type OnLoginErrorAction = {
    type: 'ON_LOGIN_ERROR';
    errorMessage: string;
    errorCode?: number;
};

type OnLogoutAction = {
    type: 'ON_LOGOUT';
};

type OnLoginCompletedAction = {
    type: 'ON_LOGIN_COMPLETED';
    data: Json;
};

type LogoutAction = {
    type: 'LOGOUT';
};

function* loginCheck() {
    yield loginInstance.loginCheck();
}

function* login(action: LoginAction) {
    yield loginInstance.login(action.data);
}

function* loginWithGoogle(action: LoginWithGoogleAction) {
    yield loginInstance.login(action.data);
}

function* onLoginError(action: OnLoginErrorAction) {
    const { errorMessage } = action;

    yield put({
        type: 'SHOW_TOAST',
        message: errorMessage,
        flavour: 'error',
    });
}

function* onLoginCompleted(action: OnLoginCompletedAction) {
    const { data } = action;
    const name = data?.firstName || data?.email;

    yield put({
        type: 'SHOW_TOAST',
        message: `Logged in as ${name}`,
        flavour: 'success',
    });

    yield put({ type: 'AUTHENTICATION_COMPLETED' });
    yield put(actions.appStateAuth.patch({ isLoggedIn: true }));
}

function* onLogout(_action: OnLogoutAction) {
    yield put(actions.appStateAuth.patch({ isLoggedIn: false }));
}

function* logout(_action: LogoutAction) {
    yield loginInstance.logout();
}

export function* root() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('LOGIN_WITH_GOOGLE', loginWithGoogle);
    yield takeEvery('AUTHENTICATION_START', loginCheck);
    yield takeEvery('ON_LOGIN_COMPLETED', onLoginCompleted);
    yield takeEvery('ON_LOGIN_ERROR', onLoginError);
    yield takeEvery('ON_LOGOUT', onLogout);
    yield takeEvery('LOGOUT', logout);
}
