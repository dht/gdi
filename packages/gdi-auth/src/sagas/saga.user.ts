import { setUser } from '@gdi/firebase';
import { actions, setUser as setUserStore } from '@gdi/store-base';
import { put, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

export function* initUser(event: any) {
  const { user } = event.data;

  if (user === null) {
    return;
  }

  setUser(user);
  setUserStore(user);

  const { email, emailVerified, metaData, photoURL, providerId, uid, providerData, isAnonymous } =
    user;

  yield put(
    actions.user.setAll({
      uid,
      email,
      emailVerified,
      metaData,
      photoURL,
      providerId,
      providerData,
      isAnonymous,
    })
  );

  yield put(
    actions.appState.patch({
      isAuthenticated: true,
    })
  );

  yield put({ type: 'AUTHENTICATION_COMPLETED' });
}

export function* root() {
  const channel = customEvenChannel('auth/change');
  yield takeEvery(channel, initUser);
}

export const saga = {
  id: 'auth.user',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['auth/change'],
  },
};
