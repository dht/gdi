import { signOut } from '@gdi/firebase';
import { call, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

export function* logout(action: any) {
  const response = yield* call(signOut);
}

export function* root() {
  const channel = customEvenChannel('logout');
  yield takeEvery(channel, logout);
}

export const saga = {
  id: 'auth.logout',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['logout'],
  },
};
