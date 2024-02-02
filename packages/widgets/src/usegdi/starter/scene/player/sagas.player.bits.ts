import { IBit, selectors } from '@gdi/store-iso';
import { changeSkyBox, showMeshes, showSkyBox, stopAllAnimations } from 'isokit2';
import { Json } from 'redux-store-generator';
import { fork, select, takeEvery, takeLatest } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { predicateSceneCurrentIds } from '../../../../helpers/predicates';
import { clearPlayedBits } from './sagas.player.animation';
import { clearedPlayedAudios as clearPlayedAudios } from './sagas.player.audio';

type Verb =
  | 'previous' //
  | 'next';

type Action = {
  type: 'BIT';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  previous: previous,
  next: next,
};

export function* previous(_action: Action, bit: IBit) {
  const config = yield* select(selectors.raw.$rawSceneConfig);

  yield* fork(clearPlayedBits);
  yield* fork(clearPlayedAudios);

  if (!config.isCharacterScene) {
    stopAllAnimations();
  }

  invokeEvent('waveform/seek', { value: 0 });
}

export function* next(_action: Action, bit: IBit) {
  invokeEvent('waveform/seek', { value: 1 });
}

export function* bit(action: any) {
  const { verb } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const bits = yield* select(selectors.raw.$rawSceneBits);
  const bit = Object.values(bits).find((bit) => bit.id === action.id);

  yield* fork(saga, action, bit);
}

export function* onBitChange(action: any) {
  const bit = yield* select(selectors.base.$bit);

  if (!bit) {
    return;
  }

  const { type, attachmentUrl, elements } = bit;

  showMeshes(elements, true);

  switch (type) {
    case 'skybox':
      changeSkyBox(attachmentUrl!, true);
      break;
    default:
      showSkyBox(false);
      break;
  }
}

export function* root() {
  yield takeLatest('BIT', bit);

  yield takeEvery(predicateSceneCurrentIds('bitId'), onBitChange);
}

export const saga = {
  id: 'widgets.player.bits',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['BIT'],
  },
};
