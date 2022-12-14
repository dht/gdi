import { put, delay, takeLatest, takeEvery, call } from 'saga-ts';
import { $s } from 'shared-base';
import { actions } from '../store/actions';
import { customEventChannel } from './channels/channel.customEvent';

let _navigate = (_params: any) => {};

export const init = (value: any) => {
    _navigate = value;
};

export function* navigate(action: any): any {
    $s('navigation', action);

    yield delay(0);

    try {
        _navigate!(action.path || action.payload?.path);
    } catch (err) {
        yield put(actions.sagaError('navigate', err));
    }
}

export function* navigateBack(_action: any): any {
    yield delay(0);

    try {
        _navigate!(-1);
    } catch (err) {
        yield put(actions.sagaError('navigateBack', err));
    }
}

export function* navigatePush(action: any): any {
    const { path } = action;
    const pathname = location.pathname;
    const parts = pathname.split('/');

    parts.push(path.replace(/^\//, ''));
    const newPath = parts.join('/');
    yield call(navigate, { path: newPath });
}

export function* navigatePop(_action: any): any {
    const pathname = location.pathname;
    const parts = pathname.split('/');

    parts.pop();
    const newPath = parts.join('/');
    yield call(navigate, { path: newPath });
}

export function* root() {
    const channel = customEventChannel('navigate');
    yield takeEvery(channel, navigate);

    const channelBack = customEventChannel('navigateBack');
    yield takeEvery(channelBack, navigateBack);

    const channelPush = customEventChannel('navigatePush');
    yield takeEvery(channelPush, navigatePush);

    const channelPop = customEventChannel('navigatePop');
    yield takeEvery(channelPop, navigatePop);

    yield takeLatest(
        ['NAVIGATE', 'NAVIGATE_WITHIN_APP', 'NAVIGATE_EXTERNAL'],
        navigate
    );
    yield takeLatest(['NAVIGATE_BACK'], navigateBack);
}

export default root;
