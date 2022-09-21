import { put, delay, takeLatest, takeEvery } from 'saga-ts';
import { $s } from 'shared-base';
import { actions } from '../../stores/platform/actions';
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

export function* navigateBack(action: any): any {
    yield delay(0);

    try {
        _navigate!(-1);
    } catch (err) {
        yield put(actions.sagaError('navigateBack', err));
    }
}

export function* root() {
    const channel = customEventChannel('navigate');
    yield takeEvery(channel, navigate);

    yield takeLatest(
        ['NAVIGATE', 'NAVIGATE_WITHIN_APP', 'NAVIGATE_EXTERNAL'],
        navigate
    );
    yield takeLatest(['NAVIGATE_BACK'], navigateBack);
}

export default root;
