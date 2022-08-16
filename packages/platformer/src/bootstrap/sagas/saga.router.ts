import { put, delay, takeLatest } from 'saga-ts';
import { actions } from '../../stores/platform/actions';

let _navigate = (_params: any) => {};

export const init = (value: any) => {
    _navigate = value;
};

export function* navigate(action: any): any {
    yield delay(0);

    try {
        _navigate!(action.path);
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
    yield takeLatest(
        ['NAVIGATE', 'NAVIGATE_WITHIN_APP', 'NAVIGATE_EXTERNAL'],
        navigate
    );
    yield takeLatest(['NAVIGATE_BACK'], navigateBack);
}

export default root;
