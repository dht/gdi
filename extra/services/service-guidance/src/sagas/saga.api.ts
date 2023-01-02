import { delay, fork, put, take, takeEvery } from 'saga-ts';
import { serviceConfig } from '../config/service';
import { toast } from '@gdi/web-ui';
import {
    serviceRegisterSuccessChannel,
    serviceRegisterErrorChannel,
} from '@gdi/platformer';
import { actions } from '../store/actions';

function* api() {
    const promises = [
        yield* put(actions.bmsFeatures.get({})),
        yield* put(actions.businessDomains.get({})),
        yield* put(actions.rankings.get({})),
        yield* put(actions.requirements.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

function* serviceRegisterSuccess() {
    yield delay(100);
    yield put(
        actions.appStateGuidance.patch({
            serviceStatus: 'READY',
        })
    );

    yield fork(api);
}

function* serviceRegisterError() {
    yield toast.show(
        `could not register service ${serviceConfig.serviceId}`,
        'error'
    );
}

export function* root() {
    yield delay(300);

    yield put({
        type: 'SERVICE_REGISTER',
        config: serviceConfig,
    });

    const channelSuccess = serviceRegisterSuccessChannel(serviceConfig.serviceId); // prettier-ignore
    yield takeEvery(channelSuccess, serviceRegisterSuccess);

    const channelError = serviceRegisterErrorChannel(serviceConfig.serviceId); // prettier-ignore
    yield takeEvery(channelError, serviceRegisterError);
}
