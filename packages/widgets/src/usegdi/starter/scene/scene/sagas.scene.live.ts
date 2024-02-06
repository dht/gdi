import { selectors } from '@gdi/store-base';
import { actions as actionsIso } from '@gdi/store-iso';
import { put, select, takeEvery } from 'saga-ts';
import { createSocketsChannel } from '../../../../helpers/channels/channel.sockets';
import { generateActions } from '../utils/utils.diff';
import { addElements, removeMeshesByContent } from 'isokit2';
import { get } from 'lodash';

const nodeNames = ['sceneBits', 'sceneDots', 'sceneMeshes', 'sceneLights'];

export function* onAssetChange(ev: any) {
  const { info, content } = ev;

  const assets = yield* select(selectors.raw.$rawAssets);
  const projectTag = yield* select(selectors.base.$projectTag);

  const asset = Object.values(assets).find((a: any) => a.filePath === info.filePath);

  if (!asset) {
    return;
  }

  const { fileName, tags = [] } = asset;

  if (fileName !== 'scene-default.json' || !tags.includes(projectTag ?? '')) {
    return;
  }

  delete content.sceneExternals;
  delete content.sceneCharacters;

  addElements(content);
  removeMeshesByContent(content);

  for (let nodeName of nodeNames) {
    const action = get(actionsIso, [nodeName, 'setAll'], null);

    if (action) {
      yield put(action(content[nodeName] ?? {}));
    }
  }
}

export function* root() {
  const appState = yield* select(selectors.raw.$rawAppState);
  const { socketsUrl } = appState;

  if (!socketsUrl) {
    return;
  }

  const channel = createSocketsChannel(socketsUrl, 'asset/change');
  yield takeEvery(channel, onAssetChange);
}

export const saga = {
  id: 'widgets.scene.live',
  type: 'socket',
  root: root,
  trigger: {
    eventNames: ['asset/change'],
  },
};
