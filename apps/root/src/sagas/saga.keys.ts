import { runFunction } from '@gdi/firebase';
import { toast } from '@gdi/ui';
import { call, put, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';
import { actions } from '@gdi/store-base';

function* saveKeys(event: any) {
  const { data } = event;

  if (Object.keys(data).length === 0) {
    return;
  }

  yield* call(runFunction, '/api/account/keys', data);
  toast.show('Keys saved');

  // validate

  const response = yield* call(runFunction, '/api/account/keys/validate');
  const { isApiKeyOk } = response;
  yield put(actions.appState.patch({ isApiKeyOk }));
}

export function* root() {
  const channel = customEvenChannel('saveKeys');
  yield takeEvery(channel, saveKeys);
}

export const saga = {
  id: 'root.keys',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['saveKeys'],
  },
};
