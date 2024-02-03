import { actions, selectors } from '@gdi/store-iso';
import { call, put, select, takeEvery } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { fetchWithProgress } from '../utils/utils.preload';

export function* preloadAssets() {
  try {
    const urls = yield* select(selectors.preload.$assets);
    yield* call(onStart, urls);

    const promises = urls.map((url: string) => {
      return fetchWithProgress(url);
    });

    // @ts-ignore
    const responses = yield Promise.all(promises);
    yield* call(onCompleted, responses);
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.player.loader.ts',
      method: 'preloadAssets',
      saga,
      err,
    });
  }
}

export function* onSizeReport(ev: any) {
  const { data } = ev;
  const { fileBytesTotal, url } = data;

  const assetLoader = yield* select(selectors.raw.$rawSceneAssetLoader);
  const { fileSizes } = assetLoader;

  fileSizes[url] = parseInt(fileBytesTotal);

  yield put(actions.sceneAssetLoader.patch({ fileSizes }));
}

export function* onProgressReport(ev: any) {
  const { data } = ev;
  const { fileBytesCompleted, fileBytesTotal, percent, url } = data;

  const assetLoader = yield* select(selectors.raw.$rawSceneAssetLoader);
  const { completedBytes } = assetLoader;

  completedBytes[url] = fileBytesCompleted;

  yield put(actions.sceneAssetLoader.patch({ completedBytes }));
}

export function* onStart(urls: string[]) {
  yield put(
    actions.sceneAssetLoader.patch({
      urls,
      isLoading: true,
      fileSizes: {},
      completedBytes: {},
      isReady: false,
      bytesCompleted: 0,
      bytesTotal: 0,
      percent: 0,
    })
  );
}

export function* onCompleted(responses: any) {
  yield put(
    actions.sceneAssetLoader.patch({
      isLoading: false,
      isReady: true,
    })
  );
}

export function* root() {
  let channel: any;

  channel = customEvenChannel('scene/assets/preload');
  yield takeEvery(channel, preloadAssets);

  channel = customEvenChannel('scene/assets/size');
  yield takeEvery(channel, onSizeReport);

  channel = customEvenChannel('scene/assets/progress');
  yield takeEvery(channel, onProgressReport);
}

export const saga = {
  id: 'widgets.player.loader',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['scene/assets/preload'],
  },
};
