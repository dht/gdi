import { takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';
import { newLog } from '@gdi/firebase';

export function* log(ev: any) {
  const { data } = ev;

  newLog(data);
}

export function* root() {
  // const channel = customEvenChannel('gdi/log');
  // yield takeEvery(channel, log);
}

export const saga = {
  id: 'gdi.logs',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['gdi/log'],
  },
};
