import { actions, selectors } from '../store';
import { delay, put, select, takeEvery } from 'saga-ts';
import { onMobileModeChange } from './predicates';
import { invokeEvent } from 'shared-base';

type ActionMobileMode = {
    type: 'SWITCH_IMAGE_ACTION';
    payload: {
        mobileMode: boolean;
    };
};

function* mobileMode(action: ActionMobileMode) {
    invokeEvent(
        action.payload?.mobileMode ? 'force-width-mobile' : 'force-width-clear',
        {}
    );
}

export function* root() {
    yield takeEvery(onMobileModeChange, mobileMode);
}
