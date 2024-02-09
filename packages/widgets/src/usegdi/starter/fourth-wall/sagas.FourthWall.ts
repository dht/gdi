import { Scene, Viewport } from '@babylonjs/core';
import { actions, selectors } from '@gdi/store-iso';
import { isMobile } from '@gdi/ui';
import { addSubtitles, applyConfig, prepareStage, setActiveCameras } from 'isokit2';
import { delay, put, select, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';

export function* onSceneReady(ev: any) {
  const scene: Scene = ev.data.scene;

  const sceneStage = yield* select(selectors.raw.$rawSceneStage);
  const sceneConfig = yield* select(selectors.raw.$rawSceneConfig);

  setActiveCameras(['free']);

  let mainCamera = scene.cameras.find((c) => c.id === 'free');
  if (!mainCamera) return;

  addSubtitles(mainCamera);

  prepareStage(sceneStage);
  return;

  yield delay(0);
  applyConfig(sceneConfig);
  yield delay(1400);

  scene.activeCamera?.detachControl();

  if (isMobile()) {
    const cornerCam1 = scene.cameras.find((c) => c.id === 'cornerCam1');
    const cornerCam2 = scene.cameras.find((c) => c.id === 'cornerCam2');
    if (!cornerCam1 || !cornerCam2) return;
    cornerCam1.viewport = new Viewport(0, 0.01, 0.3, 0.1);
    cornerCam2.viewport = new Viewport(0.7, 0.01, 0.3, 0.1);
  }
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
