import { call, delay } from 'saga-ts';
import { invokeEvent } from 'shared-base';

export function* navigateToLogin() {
  yield delay(1000);
  const { pathname } = document.location;

  if (!['/landing', '/login'].includes(pathname)) {
    document.location = '/login';
  }
}

export function* anonymous() {
  yield call(navigateToLogin);
}

const anonymousUser = {
  uid: 'guest',
  displayName: 'guest',
  email: 'guest@example.com',
  emailVerified: false,
  isAnonymous: true,
  metadata: {},
  photoURL: '',
  providerId: 'anonymous',
};
