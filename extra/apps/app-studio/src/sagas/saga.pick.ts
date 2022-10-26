import { isoEventChannel } from './channels/channel.isoEvent';
import { delay, put, takeEvery } from 'saga-ts';
import type { PickingInfo } from 'babylonjs';
import { actions } from '../store';

function* itemPick(pickingInfo: PickingInfo) {
    yield delay(500);
    yield put(
        actions.appStateStudio.patch({
            flavour: 'building',
        })
    );
}

export function* root() {
    const channelItemClick = isoEventChannel('BABYLON_ISO_PICK');
    yield takeEvery(channelItemClick, itemPick);
}
