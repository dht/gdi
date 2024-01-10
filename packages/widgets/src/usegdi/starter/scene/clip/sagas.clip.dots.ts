import { actions, createDotId, selectors } from '@gdi/store-iso';
import { playSfx, prompt, toast } from '@gdi/ui';
import { Bezier } from 'isokit2';
import { clone } from 'lodash';
import { fork, put, select, takeEvery, takeLatest } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { customEvenChannelThrottled } from '../../../../helpers/channels/channel.customEvent';
import { predicateSceneCurrentIds } from '../../../../helpers/predicates';
import { seekTo } from '../utils/utils.bits';

type Verb =
  | 'copy' //
  | 'paste'
  | 'delete';

type Action = {
  type: 'DOT';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  copy: copyDot,
  paste: pasteDot,
  delete: deleteDot,
};

export function* copyDot(action: Action) {
  const { payload } = action;
  const { trackId, virtualDotId } = payload;

  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const dotId = createDotId(currentIds, { trackId, virtualDotId });
  const dot = yield* select(selectors.singles.$dot, dotId);

  if (!dot) {
    toast.show('No dot exists');
    return;
  }

  yield put(actions.sceneCurrentIds.patch({ copiedDotId: dotId }));
  playSfx('copy');
}

export function* pasteDot(action: Action) {
  const { payload } = action;
  const { trackId, virtualDotId } = payload;

  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { copiedDotId, bitId } = currentIds;
  const dotSource = yield* select(selectors.singles.$dot, copiedDotId);
  const dotDestId = createDotId(currentIds, { trackId, virtualDotId });
  const dotDest = yield* select(selectors.singles.$dot, dotDestId);

  if (!copiedDotId || !dotSource) {
    return;
  }

  const dotData = clone(dotSource);
  dotData.id = dotDestId;
  dotData.bitId = bitId;

  if (dotDest) {
    yield* put(actions.sceneDots.patch(dotDestId, dotData));
  } else {
    yield* put(actions.sceneDots.add(dotData));
  }

  yield* put(actions.sceneCurrentIds.patch({ copiedDotId: '' }));
  playSfx('paste');
  invokeEvent('waveform/refresh');
}

export function* deleteDot(action: Action) {
  const { payload } = action;
  const { trackId, virtualDotId } = payload;

  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const dotId = createDotId(currentIds, { trackId, virtualDotId });
  const dot = yield* select(selectors.singles.$dot, dotId);

  if (!dot) {
    toast.show('No dot exists');
    return;
  }

  yield put(actions.sceneDots.delete(dotId));
}

export function* onVirtualDotClick(ev: any) {
  const { data } = ev;
  const { trackId, virtualDotId } = data;

  const bit = yield* select(selectors.base.$bit);

  if (!bit) {
    yield put(actions.sceneCurrentIds.patch({ virtualDotId: '' }));
    return;
  }

  yield put(actions.sceneCurrentIds.patch({ virtualDotId, trackId }));

  seekTo(bit, virtualDotId);
}

export function* onVirtualDotDoubleClick(ev: any) {
  const { data } = ev;
  const { trackId, virtualDotId } = data;

  // easing is only for start dots
  if (virtualDotId === 'end') {
    return;
  }

  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const dotId = createDotId(currentIds, { trackId, virtualDotId });

  const dot = yield* select(selectors.singles.$dot, dotId);

  // dot does not exist
  if (!dot) {
    return;
  }

  const { easing } = dot;

  const { value, didCancel } = yield prompt.custom({
    title: 'Global Tags',
    darkMode: true,
    component: Bezier,
    componentProps: {
      value: easing,
    },
  });

  if (didCancel) {
    return;
  }

  yield put(actions.sceneDots.patch(dotId, { easing: value }));
}

export function* recalculateDotId(_action: any) {
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { dotId } = currentIds;

  const nextDotId = createDotId(currentIds);

  if (nextDotId === dotId) {
    return;
  }

  yield put(actions.sceneCurrentIds.patch({ dotId: nextDotId }));
}

export function* dot(action: Action) {
  const { verb } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  yield* fork(saga, action);
}

export function* root() {
  let channel;

  yield takeLatest('DOT', dot);

  channel = customEvenChannelThrottled('virtualDot/click', 100);
  yield takeEvery(channel, onVirtualDotClick);

  channel = customEvenChannelThrottled('virtualDot/dblclick', 100);
  yield takeEvery(channel, onVirtualDotDoubleClick);

  yield takeEvery(predicateSceneCurrentIds('trackId'), recalculateDotId);
  yield takeEvery(predicateSceneCurrentIds('virtualDotId'), recalculateDotId);
  yield takeEvery(predicateSceneCurrentIds('elementId'), recalculateDotId);
}

export const saga = {
  id: 'widgets.clip.dots',
  type: 'customEvent',
  root: root,
  trigger: {
    actionTypes: ['virtualDot/click'],
  },
};
