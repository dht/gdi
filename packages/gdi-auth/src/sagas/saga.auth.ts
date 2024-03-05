import { call, takeEvery, delay } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { authChangeChannel } from './channels/channel.authChange';
import { anonymous } from './helpers.anonymous';

export function* authChange(action: any) {
  const { user } = action;

  if (user === null) {
    yield* call(anonymous);
    return;
  }

  invokeEvent('auth/change', action);

  if (window.location.pathname === '/login') {
    invokeEvent('nav', { path: '/' });
  }
}

export function* root() {
  const channel = authChangeChannel();
  yield takeEvery(channel, authChange);
}

export const saga = {
  id: 'auth.auth',
  type: 'authChange',
  root: root,
};
