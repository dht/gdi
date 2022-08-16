import {
    initGetNavLocation,
    GetLocationCallback,
} from '../bootstrap/utils/navigation';
import {
    ITokenStorage,
    LogCallback,
    OAuth,
    Login,
    setMainAxiosInstance,
} from 'axios-oauth';

type InitParams = {
    baseURL: string;
    tokenStorage: ITokenStorage;
    logCallback: LogCallback;
    getNavLocation: GetLocationCallback;
};

export let oAuth: OAuth;
export let loginInstance: Login;

let getStore: any;

export const initAuth = async (
    params: InitParams,
    getStoreCallback: () => any
) => {
    const { baseURL, tokenStorage, logCallback, getNavLocation } = params;
    initGetNavLocation(getNavLocation);

    getStore = getStoreCallback;

    oAuth = await OAuth.create({
        id: 'web',
        urls: {
            api: `${baseURL}`,
            issueTokens: `${baseURL}/auth/token`,
        },
        paths: {
            me: '/me',
        },
        tokenStorage,
        logCallback,
    });

    loginInstance = new Login({
        oAuth,
        callbacks: {
            navigateTo,
            onLoginCompleted,
            onLoginError,
            onLogout,
            getNavLocation,
        },
        logger: oAuth.logger,
    });

    setMainAxiosInstance(oAuth.instance);

    return {
        axiosInstance: oAuth.instance,
    };
};

const navigateTo = (to: string, reload?: boolean) => {
    if (reload) {
        document.location.pathname = to;
        return;
    }

    const store = getStore();
    store.dispatch({
        type: 'NAVIGATE_EXTERNAL',
        path: to,
    });
};

const onLoginCompleted = (data: Json) => {
    const store = getStore();
    store.dispatch({
        type: 'ON_LOGIN_COMPLETED',
        data,
    });
};

const onLoginError = (errorMessage: string, errorCode?: number) => {
    const store = getStore();
    store.dispatch({
        type: 'ON_LOGIN_ERROR',
        errorMessage,
        errorCode,
    });
};

const onLogout = () => {
    const store = getStore();
    store.dispatch({ type: 'ON_LOGOUT' });
};
