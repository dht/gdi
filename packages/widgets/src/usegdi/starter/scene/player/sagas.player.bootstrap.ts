import { takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';

export function* onSceneReady(ev: any) {}

export function* root() {
  let channel;
  channel = customEvenChannel('scene/ready');
  yield takeEvery(channel, onSceneReady);
}

export const saga = {
  id: 'widgets.player.bootstrap',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['scene/ready'],
  },
};
