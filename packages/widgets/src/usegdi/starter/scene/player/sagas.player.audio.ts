import { actions, selectors } from '@gdi/store-iso';
import { playSound, stopSound } from '@gdi/ui';
import { fork, put, select, takeEvery } from 'saga-ts';
import { customEvenChannelThrottled } from '../../../../helpers/channels/channel.customEvent';
import { clearLog, log } from '../_helpers/helper.logs';

export let playedAudios: Json = {};

export function* clearedPlayedAudios() {
  clearLog();

  const audios = yield* select(selectors.base.$audios);
  // log('bit', 'clearedPlayedAudios', audios);
  playedAudios = {};
}

export function* onCheckAudio(ev: any) {
  const { data } = ev;
  const { currentTime } = data;

  const audio = yield* select(selectors.animation.$audioForAnimation, currentTime);

  if (!audio || playedAudios[audio.id]) {
    return;
  }

  const { id: audioId, url } = audio;

  // log(`${audioId}`, `identified`);

  playedAudios[audioId] = true;
  yield put(actions.sceneCurrentIds.patch({ audioId }));

  playSound(url);
}

export function* onMoveWhilePaused() {
  const sceneState = yield* select(selectors.raw.$rawSceneState);
  const { isPlaying } = sceneState;

  if (isPlaying) {
    return;
  }

  stopSound();
  yield* fork(clearedPlayedAudios);
}

export function* root() {
  let channel;

  channel = customEvenChannelThrottled('waveform/timeupdate', 90);
  yield takeEvery(channel, onCheckAudio);

  channel = customEvenChannelThrottled('waveform/timeupdate', 90);
  yield takeEvery(channel, onMoveWhilePaused);
}

export const saga = {
  id: 'widgets.player.audio',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['waveform/timeupdate'],
  },
};
