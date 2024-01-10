import { actions, selectors } from '@gdi/store-iso';
import { put, select, takeEvery, takeLatest } from 'saga-ts';
import {
  customEvenChannel,
  customEvenChannelThrottled,
} from '../../../../helpers/channels/channel.customEvent';

export function* onCameraMove(ev: any) {}

export function* onCameraChange(ev: any) {
  const { data } = ev;
  const { cameraId } = data;

  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { bitId, dotId, trackId, virtualDotId } = currentIds;

  if (trackId !== 'camera' || !bitId || !dotId || virtualDotId !== 'start') {
    return;
  }

  yield put(actions.sceneBits.patch(bitId, { cameraId }));
}

export function* root() {
  let channel;

  channel = customEvenChannelThrottled('camera/move', 100);
  yield takeLatest(channel, onCameraMove);

  channel = customEvenChannel('camera/change');
  yield takeEvery(channel, onCameraChange);
}

export const saga = {
  id: 'widgets.clip.position.camera',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['camera/move', 'camera/change'],
  },
};
