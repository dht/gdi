import { runFunction } from '@gdi/firebase';
import { actions, selectors } from '@gdi/store-base';
import { actions as actionsIso, selectors as selectorsIso } from '@gdi/store-iso';
import { addElements, addSkyBox } from 'isokit2';
import { call, put, select, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { getNodes } from '../_helpers/helper.sagas';

const nodes = [
  'sceneExternals', //
  'sceneLights',
  'sceneDynamics',
  'sceneMeshes',
  'sceneCharacters',
  'scenePacks',
  'sceneVASPs',
  'sceneCharacters',
];

export function* restoreScene() {
  const projectId = yield* select(selectors.base.$projectTag);
  const isGuest = yield* select(selectors.base.$isGuest);
  const appState = yield* select(selectors.raw.$rawAppState);
  const { source } = appState;

  if (isGuest || source === 'static') {
    return;
  }

  try {
    const response = yield* call(runFunction, '/api/saves/scene/restore', {
      projectId,
    });

    yield put(actions.appState.patch({ source: 'file' }));
    yield call(getNodes, nodes);
  } catch (err) {
    console.log('err =>', err);
  }
}

export function* onSceneReady(ev: any) {
  const { data } = ev;
  const { autoHideExternals } = data;

  const scene = data.scene as any;

  if (!scene) {
    return;
  }

  yield put(actionsIso.sceneState.patch({ isLoading: true }));
  yield put(actionsIso.sceneCurrentIds.patch({ bitId: '' }));

  yield call(restoreScene);

  const { hideGrid } = yield* select(selectorsIso.raw.$rawSceneState);
  const elements = yield* select(selectorsIso.base.$elements);

  yield put(actionsIso.sceneState.patch({ isLoading: false }));

  yield* call(addElements, elements, { autoHideExternals, hideBase: hideGrid });

  addSkyBox('');

  const camera = scene.activeCamera;

  if (camera) {
    camera.attachControl();
  }
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
