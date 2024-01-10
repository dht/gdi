import { User, setUserId, setUserProperties } from '@gdi/firebase';
import { takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

export function* initUser(event: any) {
  const { user } = event.data;

  if (user === null) {
    return;
  }

  const { uid, isAnonymous } = user as User;

  const height = window.innerHeight;
  const width = window.innerWidth;
  const device = window.navigator.userAgent;

  setUserId(uid);
  setUserProperties({
    width,
    height,
    device,
    anonymous: isAnonymous,
  });
}

export function* root() {
  const channel = customEvenChannel('auth/change');
  yield takeEvery(channel, initUser);
}

export const saga = {
  id: 'auth.analytics',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['auth/change'],
  },
};
