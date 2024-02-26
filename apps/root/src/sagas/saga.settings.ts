import { runFunction } from '@gdi/firebase';
import { actions } from '@gdi/store-base';
import { call, put, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

function* saveSettings(event: any) {
  const { data } = event;

  if (Object.keys(data).length === 0) {
    return;
  }

  yield put(actions.settings.patch(data));
  yield* call(runFunction, '/api/account/settings', { settings: data });
}

export function* root() {
  const channel = customEvenChannel('saveSettings');
  yield takeEvery(channel, saveSettings);
}

export const saga = {
  id: 'home.settings',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['saveSettings'],
  },
};
