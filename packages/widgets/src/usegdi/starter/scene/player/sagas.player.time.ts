import { delay, put, takeEvery, takeLatest } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { actions } from '@gdi/store-iso';

export function* onReady(event: any) {
  const { data } = event;
  const { totalTime = 0 } = data ?? {};

  yield put(actions.sceneState.patch({ totalTime }));
}

export function* onTimeUpdate(event: any) {
  const { data } = event;
  const { currentTime = 0 } = data ?? {};

  yield delay(500);

  yield put(actions.sceneState.patch({ currentTime }));
}

export function* root() {
  let channel;

  channel = customEvenChannel('waveform/ready');
  yield takeLatest(channel, onReady);

  channel = customEvenChannel('waveform/timeupdate');
  yield takeLatest(channel, onTimeUpdate);
}

export const saga = {
  id: 'widgets.player.time',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['waveform/ready', 'waveform/timeupdate'],
  },
};
