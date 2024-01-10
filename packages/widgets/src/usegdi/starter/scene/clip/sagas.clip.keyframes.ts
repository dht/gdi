import { selectors } from '@gdi/store-iso';
import { getCameraInfoById, getMeshInfoById } from 'isokit2';
import { call, fork, select, takeLatest } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { updateCameraDot, updateMeshDot } from '../_helpers/helper.dots';

export function* updateCameraKeyFrame(ev: any) {
  const { data } = ev;

  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { bitId, dotId, trackId, virtualDotId } = currentIds;

  if (trackId !== 'camera' || !bitId || !dotId) {
    return;
  }

  yield call(updateCameraDot, { bitId, dotId, virtualDotId, data });
}

export function* updateMeshKeyframe(ev: any) {
  const { data } = ev;

  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { bitId, dotId, elementId, trackId, virtualDotId } = currentIds;

  if (trackId !== 'object' || !bitId || !elementId || !dotId) {
    return;
  }

  yield call(updateMeshDot, { bitId, dotId, virtualDotId, data });
}

export function* updateKeyframe(ev: any) {
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { bitId, trackId, virtualDotId, elementId, cameraId } = currentIds;

  if (!bitId || !trackId || !virtualDotId) {
    return;
  }

  let data: Json = {};

  if (trackId === 'camera') {
    data = getCameraInfoById(cameraId);
    yield fork(updateCameraKeyFrame, { data });
  } else {
    data = getMeshInfoById(elementId);
    yield fork(updateMeshKeyframe, { data });
  }
}

export function* root() {
  let channel;

  channel = customEvenChannel('keyframe/createOrUpdate');
  yield takeLatest(channel, updateKeyframe);
}

export const saga = {
  id: 'widgets.clip.keyframes',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['keyframe/createOrUpdate'],
  },
};
