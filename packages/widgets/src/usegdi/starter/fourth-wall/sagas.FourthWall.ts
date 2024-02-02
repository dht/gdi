import { Scene, Vector3 } from '@babylonjs/core';
import { actions } from '@gdi/store-iso';
import {
  addDecal,
  addSubtitles,
  applyConfig,
  initDecalPaste,
  prepareStage,
  setActiveCameras,
  setDecalPick,
} from 'isokit2';
import { delay, put, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';
import { elements } from './data/data.elements';
import { mouthShapes } from './data/data.mouthShapes';
import { addSlider, initGui, setDecal } from './FourthWall.utils';

export function* onSceneReady(ev: any) {
  const scene: Scene = ev.data.scene;

  setActiveCameras(['free']);

  let mainCamera = scene.cameras.find((c) => c.id === 'free');
  if (!mainCamera) return;

  addSubtitles(mainCamera);

  prepareStage(elements.sceneStage);

  yield delay(0);
  applyConfig(elements.sceneConfig);
  yield delay(4000);

  // addDecal(mouthShapes[1]);

  scene.activeCamera?.detachControl();
  // initDecalPaste('/boards/assets/mouth-set-3/mouth-shapes_e.png');
}

export function* root() {
  let channel;

  yield put(actions.sceneState.patch({ totalTime: 60 }));

  channel = customEvenChannel('scene/ready');
  yield takeEvery(channel, onSceneReady);
}

export const saga = {
  id: 'widgets.fourthWall',
  type: 'component',
  root: root,
  trigger: {
    eventNames: ['scene/ready'],
  },
};
