import { signInWithGoogle } from '@gdi/firebase';
import { call, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

export function* loginGoogle(action: any) {
  yield* call(signInWithGoogle);
}

export function* root() {
  const channel = customEvenChannel('login/google');
  yield takeEvery(channel, loginGoogle);
}

export const saga = {
  id: 'auth.google',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['login/google'],
  },
};
