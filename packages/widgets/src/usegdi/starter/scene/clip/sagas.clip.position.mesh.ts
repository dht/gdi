import { takeLatest } from 'saga-ts';
import { customEvenChannelThrottled } from '../../../../helpers/channels/channel.customEvent';

export function* onMeshMove() {}

export function* root() {
  let channel;

  channel = customEvenChannelThrottled('mesh/move', 100);
  yield takeLatest(channel, onMeshMove);
}

export const saga = {
  id: 'widgets.clip.position.mesh',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['mesh/move'],
  },
};
