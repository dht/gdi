import { runFunction } from '@gdi/firebase';
import { toast } from '@gdi/ui';
import { call, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

function* saveBoard(event: any) {
  const { data } = event;

  if (Object.keys(data).length === 0) {
    return;
  }

  yield* call(runFunction, '/api/account/keys', data);
  toast.show('Keys saved');
}

export function* root() {
  const channel = customEvenChannel('saveBoard');
  yield takeEvery(channel, saveBoard);
}

export const saga = {
  id: 'home.newBoard',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['saveBoard'],
  },
};
