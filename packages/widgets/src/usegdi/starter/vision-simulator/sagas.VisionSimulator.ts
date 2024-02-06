import { ArcRotateCamera, Scene, Vector3, Viewport } from '@babylonjs/core';
import { actions, selectors } from '@gdi/store-iso';
import { initSplat, switchCamera } from 'isokit2';
import { isMobile } from '@gdi/ui';
import { addSubtitles, applyConfig, prepareStage, setActiveCameras } from 'isokit2';
import { delay, put, select, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';

export function* onSceneReady(ev: any) {
  const scene: Scene = ev.data.scene;

  const sceneStage = yield* select(selectors.raw.$rawSceneStage);
  const sceneConfig = yield* select(selectors.raw.$rawSceneConfig);

  let mainCamera = scene.cameras.find((c) => c.id === 'free');
  if (!mainCamera) return;
  mainCamera.position = new Vector3(10, 5, 0);

  addSubtitles(mainCamera);

  prepareStage(sceneStage);

  yield delay(0);
  applyConfig(sceneConfig);
  yield delay(400);

  if (isMobile()) {
    const cornerCam1 = scene.cameras.find((c) => c.id === 'cornerCam1');
    if (!cornerCam1) return;
    cornerCam1.viewport = new Viewport(0, 0.01, 0.3, 0.1);
  }

  const arc = scene.cameras.find((c) => c.id === 'arc') as ArcRotateCamera;

  if (!arc) return;
  scene.activeCamera = arc;
  scene.activeCamera.attachControl();
  arc.target = new Vector3(0, 5, 0);
  arc.radius = 20;
  arc.alpha = Math.PI / 2;
  arc.beta = Math.PI / 2;
}

export function* root() {
  let channel;

  yield put(actions.sceneState.patch({ totalTime: 60 }));

  channel = customEvenChannel('scene/ready');
  yield takeEvery(channel, onSceneReady);
}

export const saga = {
  id: 'widgets.visionSimulator',
  type: 'component',
  root: root,
  trigger: {
    eventNames: ['scene/ready'],
  },
};
