import { AxiosInstance } from 'axios';
import { firebase } from '../utils/firebase';
import { initLogin } from 'axios-oauth';
import { invokeEvent, log } from 'shared-base';
import { IServiceConfig } from '../types';
import { put } from 'redux-saga/effects';
import { RestAdapter } from 'redux-connected';
import { select, takeEvery } from 'saga-ts';
import { setRestAdapter } from '../core/platform.init';
import { getPlatformState } from '../utils/globals';

type RegisterServiceAction = {
    type: 'REGISTER_SERVICE';
    config: IServiceConfig;
};

export function* registerService(action: RegisterServiceAction): any {
    const { config } = action;
    const { serviceId, apiUrl } = config;
    const { $status, patchStatus } = config;

    const { accountName, languageCode } = getPlatformState();

    const status = yield* select($status);

    if (status !== 'INITIAL') {
        return;
    }

    log('Registering service ' + serviceId, {
        status,
    });

    yield put(patchStatus('REGISTERING'));

    const login = initLogin({
        serviceId,
        clientId: accountName,
        rootUrl: apiUrl,
        extraHeaders: {
            'language-code': languageCode,
        },
        afterAuthorize: (data: Json) => {
            return firebase.writeHandshakeToken(
                data.handshake_token,
                data.valid_until
            );
        },
        afterLogin: (success: boolean, _me: Json = {}) => {
            if (!success) {
                console.log(`SERVICE_REGISTER_ERROR_${serviceId}`);
                invokeEvent(`SERVICE_REGISTER_ERROR_${serviceId}`);
                return;
            }

            serviceCreateAdapter(config, login.oAuth.instance);
        },
    });

    yield login.loginCheck();
}

export function serviceCreateAdapter(
    config: IServiceConfig,
    axiosInstance: AxiosInstance
) {
    const { serviceId } = config;

    const restAdapter = new RestAdapter({
        axios: axiosInstance,
    });

    setRestAdapter(`service-${serviceId}`, restAdapter);
    invokeEvent(`SERVICE_REGISTER_SUCCESS_${serviceId}`);
}

export function* root() {
    log('Starting platformer services saga...', {});
    yield takeEvery('SERVICE_REGISTER', registerService);
}

export default root;
