import { runFunction } from '@gdi/firebase';
import { actions, selectors } from '@gdi/store-base';
import { call, fork, put, select, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';

export function* bootstrap() {
  yield put(actions.currentIds.patch({ tabId: 'search', remoteItemId: '' }));

  const resPurchased = yield* call(runFunction, '/api/music/purchases', {});

  yield put(actions.remoteItems.setAll(resPurchased));
}

export function* onSearch(ev: any) {
  const { data } = ev;
  const { q } = data;

  const resSearch = yield* call(runFunction, '/api/music/search', {
    q,
  });

  const currentPurchase = yield* select(selectors.music.$purchasedObj);

  yield put(
    actions.remoteItems.setAll({
      ...currentPurchase,
      ...resSearch,
    })
  );
}

export function* root() {
  let channel: any;

  yield fork(bootstrap);

  channel = customEvenChannel('music/search');
  yield takeEvery(channel, onSearch);
}

export const saga = {
  id: 'widgets.musicList',
  type: 'component',
  root: root,
  trigger: {},
};
