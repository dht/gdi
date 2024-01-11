import { IBit, actions, selectors, createDotId } from '@gdi/store-iso';
import { prompt, toast } from '@gdi/ui';
import { Json } from 'redux-store-generator';
import { call, delay, fork, put, select, takeEvery, takeLatest } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { predicateSceneCurrentIds } from '../../../../helpers/predicates';
import AssetPickerContainer from '../../asset-picker/AssetPicker.container';
import { addSkyBoxDot } from '../_helpers/helper.dots';
import { onBitChange } from '../player/sagas.player.bits';
import { BitOperation, performBitOperation, seekTo } from '../utils/utils.bits';
import { log } from '../_helpers/helper.logs';

type Verb =
  | 'split' //
  | 'resize'
  | 'previous'
  | 'focus'
  | 'unfocus'
  | 'next'
  | 'attachment'
  | 'clearAttachment'
  | 'edit'
  | 'delete';

type Action = {
  type: 'BIT';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  split: split,
  resize: resize,
  delete: deleteBit,
  previous: seekStart,
  next: seekEnd,
  focus: focus,
  unfocus: unfocus,
  attachment: attachment,
  clearAttachment: clearAttachment,
  edit: edit,
};

export function* focus(action: Action, bit: IBit) {
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { id } = bit;

  // already focused? unfocus
  if (id === currentIds.bitId) {
    yield call(unfocus, action, bit);
    return;
  }

  log('patchCurrentIds #1', `bitId: ${bit.id}`, currentIds);
  yield put(actions.sceneCurrentIds.patch({ bitId: id }));
  yield call(updateCue);
  yield call(seekStart, action, bit, true);
}

export function* unfocus(_action: Action, bit: IBit) {
  log('patchCurrentIds #2', `bitId: ''`);
  yield put(actions.sceneCurrentIds.patch({ bitId: '' }));
}

export function* deleteBit(action: Action, bit: IBit) {
  const bits = yield* select(selectors.base.$bits);
  const index = bits.findIndex((b: any) => b.id === bit.id);

  if (index === 0) {
    toast.show('Cannot delete first bit', 'error');
    return;
  }

  yield put(actions.sceneBits.delete(bit.id));

  const dots = yield* select(selectors.raw.$rawSceneDots);

  const dotsForBit = Object.values(dots).filter((dot: any) => dot.bitId === bit.id);

  for (let dot of dotsForBit) {
    yield put(actions.sceneDots.delete(dot.id));
  }
}

export function* updateCue() {
  const bit = yield* select(selectors.base.$bit);
  let cue: any = [0, 0];

  if (bit) {
    const { timestampPercent, durationPercent } = bit;
    cue = [timestampPercent, timestampPercent + durationPercent!];
  }

  yield put(actions.sceneState.patch({ cue }));
}

export function* seekPrevious(_action: Action, bit: IBit) {
  const bits = yield* select(selectors.base.$bits);
  const index = bits.findIndex((b: any) => b.id === bit.id);
  const previousBit = bits[index - 1];

  if (!previousBit) {
    return;
  }

  const change = {
    virtualDotId: 'end',
    bitId: previousBit.id,
  };

  log('patchCurrentIds #3', JSON.stringify(change));

  yield put(actions.sceneCurrentIds.patch(change));

  seekTo(previousBit, 'end');
}

export function* seekStart(_action: Action, bit: IBit, silent: true) {
  if (!bit) {
    invokeEvent('waveform/seek', { value: 0 });
    return;
  }
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { virtualDotId } = currentIds;

  if (virtualDotId === 'start' && !silent) {
    yield call(seekPrevious, _action, bit);
    return;
  }

  seekTo(bit, 'start');

  const dotId = createDotId(currentIds);
  yield put(actions.sceneCurrentIds.patch({ dotId }));
}

export function* attachment(_action: Action, bit: IBit) {
  const { value, didCancel } = yield prompt.custom({
    title: 'Select an asset',
    component: AssetPickerContainer,
    componentProps: {
      contentType: ['image', 'json'],
    },
    darkMode: true,
  });

  if (didCancel || !value) {
    return;
  }

  const { contentType, assetUrl, fileName } = value;
  const isSkyBox = contentType === 'image';

  yield put(
    actions.sceneBits.patch(bit.id, {
      type: isSkyBox ? 'skybox' : 'layer',
      attachmentUrl: assetUrl,
      attachmentFilename: fileName,
    })
  );

  if (isSkyBox) {
    yield* fork(addSkyBoxDot, bit);
  }
}

export function* clearAttachment(_action: Action, bit: IBit) {
  yield put(
    actions.sceneBits.patch(bit.id, {
      type: 'basic',
      attachmentUrl: '',
      attachmentFilename: '',
    })
  );
}

export function* edit(_action: Action, bit: IBit) {
  const { id, name } = bit;

  const { value, didCancel } = yield prompt.input({
    title: 'Rename bit',
    placeholder: 'Enter a new name',
    ctaButtonText: 'Rename',
    defaultValue: name,
  });

  if (didCancel || !value) {
    return;
  }

  yield put(
    actions.sceneBits.patch(id, {
      name: value,
    })
  );
}

export function* seekNext(_action: Action, bit: IBit) {
  const bits = yield* select(selectors.base.$bits);
  const index = bits.findIndex((b: any) => b.id === bit.id);
  const nextBit = bits[index + 1];

  if (!nextBit) {
    return;
  }

  const change = {
    virtualDotId: 'start',
    bitId: nextBit.id,
  };

  log('patchCurrentIds #4', JSON.stringify(change));

  yield put(actions.sceneCurrentIds.patch(change));

  seekTo(nextBit, 'start');
}

export function* seekEnd(_action: Action, bit: IBit) {
  if (!bit) {
    invokeEvent('waveform/seek', { value: 1 });
    return;
  }
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { virtualDotId } = currentIds;

  if (virtualDotId === 'end') {
    yield call(seekNext, _action, bit);
    return;
  }

  seekTo(bit, 'end');

  const dotId = createDotId(currentIds);
  yield put(actions.sceneCurrentIds.patch({ dotId }));
}

export function* split(_action: Action, bit: IBit) {
  const sceneState = yield* select(selectors.raw.$rawSceneState);
  const bitAtCurrentTime = yield* select(selectors.base.$bitAtCurrentTime);
  const { currentTime } = sceneState;
  const { padLeft, padRight } = bitAtCurrentTime;

  if (padLeft < 0.5 || padRight < 0.5) {
    toast.show('Split not possible', 'error');
    return;
  }

  const bits = yield* select(selectors.base.$bits);

  const bitsNext = performBitOperation(
    {
      id: '',
      type: 'split',
      value: currentTime,
    },
    bits
  );

  const newBit = bitsNext.find((bit) => bit.timestamp === currentTime);
  const changedBits = bitsNext.filter((bit) => bit.timestamp !== currentTime);

  if (newBit) {
    const { value, didCancel } = yield prompt.input({
      title: 'Rename bitId',
      placeholder: 'Enter a bitId',
      ctaButtonText: 'Set Id',
      defaultValue: newBit.id,
    });

    if (!didCancel || value) {
      newBit.id = value;
    }

    yield put(actions.sceneBits.add(newBit as IBit));
  }

  for (let bit of changedBits) {
    const { id, timestamp } = bit;
    yield put(actions.sceneBits.patch(id, { timestamp }));
  }

  yield call(updateCue);
}

export function* resize(action: Action, bit: IBit) {
  const { payload } = action;
  const { x, width } = payload;

  const state = yield* select(selectors.raw.$rawSceneState);
  const bits = yield* select(selectors.base.$bits);
  const { totalTime } = state;

  const delta = (x * totalTime) / width;

  const operation: BitOperation = {
    id: bit.id,
    type: 'expand',
    value: delta,
  };

  const output = performBitOperation(operation, bits);

  for (let bit of output) {
    const { id, timestamp } = bit;
    yield put(actions.sceneBits.patch(id, { timestamp }));
  }

  yield call(updateCue);
}

export function* bit(action: any) {
  const { verb } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const bits = yield* select(selectors.base.$bits);
  const bit = bits.find((bit) => bit.id === action.id);

  yield* fork(saga, action, bit);
}

export function* root() {
  yield takeLatest('BIT', bit);

  yield takeEvery(predicateSceneCurrentIds('bitId'), onBitChange);
}

export const saga = {
  id: 'widgets.clip.bits',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['BIT'],
  },
};
