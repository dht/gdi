import { Scene } from '@babylonjs/core';
import { runFunction } from '@gdi/firebase';
import { selectors } from '@gdi/store-base';
import { actions as actionsIso, selectors as selectorsIso } from '@gdi/store-iso';
import { addElements, addSkyBox } from 'isokit2';
import { call, put, select, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { getNodes } from '../_helpers/helper.sagas';

const nodes = [
  'sceneExternals', //
  'sceneLights',
  'sceneMeshes',
];

export function* restoreScene() {
  try {
    yield call(getNodes, nodes);
  } catch (err) {
    console.log('err =>', err);
  }
}

export function* onSceneReady(ev: any) {
  const { data } = ev;
  const scene = data.scene as Scene;

  if (!scene) {
    return;
  }

  yield put(actionsIso.sceneState.patch({ isLoading: true }));
  yield put(actionsIso.sceneCurrentIds.patch({ bitId: '' }));
  const projectId = yield* select(selectors.base.$projectTag);

  let response;

  response = yield* call(runFunction, '/api/saves/scene/restore', {
    projectId,
  });

  yield call(restoreScene);

  const elements = yield* select(selectorsIso.base.$elements);

  yield put(actionsIso.sceneState.patch({ isLoading: false }));
  yield* call(addElements, elements);

  addSkyBox('');
}

export function* root() {
  let channel;

  channel = customEvenChannel('scene/ready');
  yield takeEvery(channel, onSceneReady);
}

export const saga = {
  id: 'widgets.scene.bootstrap',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['scene/ready'],
  },
};
