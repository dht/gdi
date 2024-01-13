import { call } from 'saga-ts';
import { invokeEvent } from 'shared-base';

export function* anonymous() {
  invokeEvent('auth/change', {
    user: anonymousUser,
  });
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
