import { takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';

export function* onSceneReady(ev: any) {}

export function* root() {
  let channel;
  channel = customEvenChannel('scene/ready');
  yield takeEvery(channel, onSceneReady);
}

export const saga = {
  id: 'widgets.3d.bootstrap',
  type: 'customEvent',
  root: root,
  trigger: {
    actionTypes: ['scene/ready'],
  },
};
