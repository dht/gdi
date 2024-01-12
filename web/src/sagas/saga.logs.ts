import { put, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';
import { actions } from '@gdi/store-base';

export function* log(ev: any) {
  const { data } = ev;

  yield put(actions.logs.patch(data.id, data));
}

export function* root() {
  const channel = customEvenChannel('gdi/log');
  yield takeEvery(channel, log);
}

export const saga = {
  id: 'gdi.logs',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['gdi/log'],
  },
};
