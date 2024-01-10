import { call, delay, takeEvery } from 'saga-ts';
import { authChangeChannel } from './channels/channel.authChange';
import { anonymous } from './helpers.anonymous';
import { customEvenChannel } from './channels/channel.customEvent';

export function* loginEmail(action: any) {}

export function* root() {
  const channel = customEvenChannel('login/email');
  yield takeEvery(channel, loginEmail);
}

export const saga = {
  id: 'auth.email',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['saveBoard'],
  },
};
