import { actions, selectors } from '@gdi/store-iso';
import { delay, fork, put, select, takeEvery } from 'saga-ts';
import { customEvenChannelThrottled } from '../../../../helpers/channels/channel.customEvent';
import { reduceElements } from '../utils/utils.reduce';
import { applyCurrentKeyframes, setCamera } from 'isokit2';
import { log } from '../_helpers/helper.logs';

export function* refreshPosition(ev: any) {
  const { data } = ev;
  const { currentTime } = data;

  yield delay(100);

  // reduce all dots to current position
  const allEntities = yield* select(selectors.base.$allEntities);
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const isCameraTrack = currentIds.trackId === 'camera';

  const reduced = reduceElements(currentTime, allEntities);

  applyCurrentKeyframes(reduced.elements, !isCameraTrack);

  log('refreshPosition', `${reduced.cameraId}`, reduced);

  if (isCameraTrack) {
    setCamera(reduced.cameraId);
  }
}

export function* refreshDots(ev: any) {
  yield delay(10);

  const { data } = ev;
  const { currentTime } = data;

  // refresh bitId and virtualDotId
  const bitAndVirtualDot = yield* select(selectors.animation.$bitAndVirtualDot, currentTime);

  const { bitId, virtualDotId } = bitAndVirtualDot;

  const change: Json = {
    virtualDotId,
  };

  if (bitId) {
    change.bitId = bitId;
  }

  log('patchCurrentIds #6', JSON.stringify(change), change);
  yield put(actions.sceneCurrentIds.patch(change));
}

export function* root() {
  let channel;

  channel = customEvenChannelThrottled('waveform/timeupdate', 100);
  yield takeEvery(channel, refreshPosition);

  channel = customEvenChannelThrottled('waveform/timeupdate', 100);
  yield takeEvery(channel, refreshDots);

  // clean up
}

export const saga = {
  id: 'widgets.player.setPiece',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['waveform/timeupdate'],
  },
};
