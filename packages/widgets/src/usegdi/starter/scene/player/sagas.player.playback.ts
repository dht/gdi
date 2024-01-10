import { actions, actions as actionsIso } from '@gdi/store-iso';
import { detachGizmo, stopAllAnimations } from 'isokit2';
import { cancel, fork, put, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import {
  clearPlayedBits,
  playedBits,
  root as rootOnCheckAnimation,
} from './sagas.player.animation';
import { root as rootRefreshPosition } from './sagas.player.setPiece';
import { clearedPlayedAudios } from './sagas.player.audio';
import { stopAllSounds } from '@gdi/ui';

let task: any;

export function* onPlay() {
  yield* fork(clearPlayedBits);
  yield* fork(clearedPlayedAudios);

  if (task) {
    yield* cancel(task);
  }

  task = yield* fork(rootOnCheckAnimation);
  yield put(actionsIso.sceneState.patch({ isPlaying: true }));
  yield put(actions.sceneCurrentIds.patch({ dotId: '' }));
  detachGizmo();
}

export function* onPause() {
  if (task) {
    yield* cancel(task);
  }

  stopAllSounds();

  task = yield* fork(rootRefreshPosition);
  yield put(actionsIso.sceneState.patch({ isPlaying: true }));
  stopAllAnimations();
}

export function* root() {
  let channel;

  channel = customEvenChannel('waveform/play');
  yield takeEvery(channel, onPlay);

  channel = customEvenChannel('waveform/pause');
  yield takeEvery(channel, onPause);

  task = yield* fork(rootRefreshPosition);
}

export const saga = {
  id: 'widgets.player.playback',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['waveform/play', 'waveform/pause'],
  },
};
