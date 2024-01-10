import { IBit, actions, selectors, ISceneEffect } from '@gdi/store-iso';
import { playSound, prompt, toast } from '@gdi/ui';
import { Json } from 'redux-store-generator';
import { call, delay, fork, put, select, takeLatest } from 'saga-ts';
import EffectPickerContainer from '../../effect-picker/EffectPicker.container';
import { guid4 } from 'shared-base';
import { getEffect } from '../_helpers/helper.assets';
import { playEffect, stopAllEffects } from 'isokit2';

type Verb = 'addEffect' | 'moveEffect' | 'deleteEffect' | 'focusEffect';

type Action = {
  type: 'AUDIO';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  addEffect: addEffect,
  moveEffect: moveEffect,
  deleteEffect: deleteEffect,
  focusEffect: focusEffect,
};

export function* addEffect(action: Action, effect: ISceneEffect) {
  const { payload } = action;
  const { percent } = payload;
  const totalTime = yield* select(selectors.base.$totalTime);

  const effectId: string = yield call(getEffect);

  if (!effectId) {
    return;
  }

  const item: ISceneEffect = {
    id: guid4(),
    timestamp: percent * totalTime,
    effectId,
    duration: 0,
  };

  yield put(actions.sceneEffects.add(item));
}

export function* focusEffect(action: Action, effect: ISceneEffect) {
  const { id } = action;
  const { effectId } = effect;
  yield put(actions.sceneCurrentIds.patch({ effectId: id }));

  if (!effectId) {
    return;
  }

  playEffect(effectId);
}

export function* moveEffect(action: Action, effect: ISceneEffect) {
  const { id, payload } = action;
  const { percent } = payload;

  const totalTime = yield* select(selectors.base.$totalTime);

  const timestamp = percent * totalTime;

  yield put(
    actions.sceneEffects.patch(id, {
      timestamp,
    })
  );
}

export function* deleteEffect(action: Action, effect: ISceneEffect) {
  const { id } = action;

  yield put(actions.sceneEffects.delete(id));
}

export function* _effect(action: any) {
  const { verb } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const effect = yield* select(selectors.singles.$effect, action.id);

  yield* fork(saga, action, effect);
}

export function* root() {
  yield takeLatest('EFFECT', _effect);
}

export const saga = {
  id: 'widgets.clip.effects',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['EFFECT'],
  },
};
