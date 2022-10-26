import { isoEventChannel } from './channels/channel.isoEvent';
import { takeEvery } from 'saga-ts';
import type { PickingInfo } from 'babylonjs';

function* hover(pickingInfo: PickingInfo) {}

function* hoverOut(pickingInfo: PickingInfo) {}

export function* root() {
    const channelHover = isoEventChannel('BABYLON_ISO_HOVER');
    yield takeEvery(channelHover, hover);
    const channelHoveOut = isoEventChannel('BABYLON_ISO_HOVER_OUT');
    yield takeEvery(channelHoveOut, hoverOut);
}
