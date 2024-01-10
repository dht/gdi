import { actions, selectors } from '@gdi/store-iso';
import { fork, put, select, takeEvery } from 'saga-ts';
import { customEvenChannelThrottled } from '../../../../helpers/channels/channel.customEvent';
import { clearLog, log } from '../_helpers/helper.logs';
import { playEffect, stopAllEffects } from 'isokit2';

export let playedEffects: Json = {};

export function* clearedPlayedEffects() {
  clearLog();

  const effects = yield* select(selectors.base.$effects);
  // log('bit', 'clearedPlayedEffects', effects);
  playedEffects = {};
}

export function* onCheckEffect(ev: any) {
  const { data } = ev;
  const { currentTime } = data;

  const effect = yield* select(selectors.animation.$effectsForAnimation, currentTime);

  if (!effect || playedEffects[effect.id]) {
    return;
  }

  const { effectId } = effect;

  // log(`${effectId}`, `identified`);

  playedEffects[effectId] = true;
  yield put(actions.sceneCurrentIds.patch({ effectId }));

  playEffect(effectId);
}

export function* onMoveWhilePaused() {
  const sceneState = yield* select(selectors.raw.$rawSceneState);
  const { isPlaying } = sceneState;

  if (isPlaying) {
    return;
  }

  stopAllEffects();
  yield* fork(clearedPlayedEffects);
}

export function* root() {
  let channel;

  channel = customEvenChannelThrottled('waveform/timeupdate', 90);
  yield takeEvery(channel, onCheckEffect);

  channel = customEvenChannelThrottled('waveform/timeupdate', 90);
  yield takeEvery(channel, onMoveWhilePaused);
}

export const saga = {
  id: 'widgets.player.effects',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['waveform/timeupdate'],
  },
};
