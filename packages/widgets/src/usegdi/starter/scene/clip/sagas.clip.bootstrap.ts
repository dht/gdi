import { runFunction } from '@gdi/firebase';
import { actions, selectors } from '@gdi/store-base';
import { selectors as selectorsIso, actions as actionsIso } from '@gdi/store-iso';
import { call, put, select, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { getNodes } from '../_helpers/helper.sagas';
import { get } from 'lodash';
import { invokeEvent } from 'shared-base';

const nodes = [
  'sceneBits', //
  'sceneDots',
  'sceneAudios',
  'sceneEffects',
];

export function* restoreClip() {
  const isGuest = yield* select(selectors.base.$isGuest);
  const appState = yield* select(selectors.raw.$rawAppState);
  const { source } = appState;

  if (isGuest || source === 'static') {
    return;
  }

  const projectId = yield* select(selectors.base.$projectTag);

  try {
    const response = yield* call(runFunction, '/api/saves/clip/restore', {
      projectId,
    });

    yield put(actions.appState.patch({ source: 'file' }));
    yield call(getNodes, nodes);
  } catch (err) {
    console.log('err =>', err);
  }
}

export function* onSceneReady(ev: any) {
  yield call(restoreClip);

  const bits = yield* select(selectorsIso.base.$bits);
  const firstBitId = get(bits, '[0].id', '');

  yield put(actionsIso.sceneCurrentIds.patch({ bitId: firstBitId }));
  invokeEvent('waveform/timeupdate', { currentTime: 0 });
}

export function* root() {
  let channel;

  channel = customEvenChannel('scene/ready');
  yield takeEvery(channel, onSceneReady);
}

export const saga = {
  id: 'widgets.clip.bootstrap',
  type: 'customEvent',
  root: root,
  trigger: {
    actionTypes: ['scene/ready'],
  },
};
