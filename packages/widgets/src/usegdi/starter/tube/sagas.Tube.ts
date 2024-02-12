import { call, put, takeEvery, waitForAuth } from 'saga-ts';
import { actions as actionsIso } from '@gdi/store-iso';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';
import axios from 'axios';
import { addElements, addSkyBox } from 'isokit2';
import { seedDb } from '@gdi/store-base';

export function* loadClip(ev: any) {
  const { clip } = ev?.data ?? {};

  if (!clip) {
    return;
  }

  const { url } = clip;

  const response: any = yield* call(axios.get, url);
  const data = response.data;

  addElements(data, { hideBase: true, autoHideExternals: true });
  seedDb(data);

  addSkyBox('');
  yield put(actionsIso.sceneState.patch({ isLoading: false }));
}

export function* root() {
  let channel;

  channel = customEvenChannel('tube/load');
  yield takeEvery(channel, loadClip);
}

export const saga = {
  id: 'widgets.tube',
  type: 'component',
  root: root,
  trigger: {
    eventNames: [],
  },
};
