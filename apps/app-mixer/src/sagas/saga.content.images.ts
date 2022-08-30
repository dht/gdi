import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/platformer';

type ActionSwitchImage = {
    type: 'SWITCH_IMAGE_ACTION';
    imageId: string;
};

function* switchImage(action: ActionSwitchImage) {
    console.log('action ->', action);
}

export function* root() {
    yield takeEvery('SWITCH_IMAGE_ACTION', switchImage);
}
