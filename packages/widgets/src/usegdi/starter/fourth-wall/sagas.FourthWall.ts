import {
  HemisphericLight,
  FreeCamera,
  Viewport,
  MeshBuilder,
  Scene,
  ArcRotateCamera,
  Vector3,
} from '@babylonjs/core';
import { AdvancedDynamicTexture, Button, TextBlock } from '@babylonjs/gui/2D';
import { IDecal, actions } from '@gdi/store-iso';
import {
  addDecal,
  addElements,
  addRemoteScene,
  addSkyBox,
  addStage,
  addStageMask,
  changeSkyBox,
  changeStage,
  changeStageMask,
  setDecalPick,
} from 'isokit2';
import { call, put, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';
import { mouthShapes } from './data/data.mouthShapes';
import { elements } from './data/data.niceLights';
import { camera } from '../scene/base/sagas.base.toolbox';

const shapes: any = {};
const characters: any = {
  manRoot: '',
  womanRoot: '',
  manMesh: '',
  womanMesh: '',
  manAGs: [],
  womanAGs: [],
};

export function* onSceneReady(ev: any) {
  const scene: Scene = ev.data.scene;

  addElements(elements);

  const sun = scene.lights.find((l) => l.id === 'sun') as HemisphericLight;
  if (sun) {
    // sun.dispose();
  }

  const { meshes: m1, animationGroups: ag1 } = yield* call(addRemoteScene, {
    id: 'basic',
    meshNames: '',
    rootUrl: '/boards/assets/',
    fileName: 'main.glb',
  });

  characters.manMesh = m1.find((mesh: any) => mesh.id === 'Ch36');
  characters.manRoot = m1.find((mesh: any) => mesh.id === '__root__');
  characters.manRoot.position = new Vector3(10, -1.3, -0.5);
  characters.manRoot.rotation = new Vector3(0, -Math.PI / 4, 0);
  characters.manAGs = ag1;
  characters.manRoot.layerMask = 1;

  const { meshes: m2, animationGroups: ag2 } = yield* call(addRemoteScene, {
    id: 'basic2',
    meshNames: '',
    rootUrl: '/boards/assets/',
    fileName: 'main-2.glb',
  });

  characters.womanMesh = m2.find((mesh: any) => mesh.id === 'Ch36');
  characters.womanRoot = m2.find((mesh: any) => mesh.id === '__root__');
  characters.womanRoot.position = new Vector3(10, -1.8, 1.5);
  characters.womanRoot.rotation = new Vector3(0, Math.PI, 0);
  characters.womanAGs = ag2;
  characters.womanRoot.layerMask = 1;

  addSkyBox('');
  changeSkyBox('/boards/assets/bk.png', true);
  addStage('');
  changeStage('/boards/assets/stage.png', true);
  addStageMask('');
  changeStageMask('/boards/assets/stage-mask.png', true);

  const ids = m1.map((mesh: any) => mesh.id);
  console.log('ids ->', ids);

  // animationGroups[1].play(true);

  const plane = MeshBuilder.CreatePlane('plane', { width: 10, height: 10 }, scene);
  plane.position = new Vector3(2, 0, 5);
  plane.rotation = new Vector3(0, Math.PI * 0.8, 0);

  mouthShapes.forEach((decal: IDecal) => {
    const { id } = decal;
    const shape = addDecal(decal, characters.manMesh);
    shapes[id] = shape;
  });

  setDecalPick(mouthShapes[0]);

  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI');

  const text = new TextBlock('subtitles', 'You look like a complete buffoon!\nits progress dear');

  text.color = 'white';
  text.fontSize = 38;
  text.fontFamily = 'Helvetica';
  text.shadowColor = 'black';
  text.shadowBlur = 3;
  text.shadowOffsetX = 5;
  text.shadowOffsetY = 5;
  text.textHorizontalAlignment = TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
  text.textVerticalAlignment = TextBlock.VERTICAL_ALIGNMENT_BOTTOM;
  text.top = -70;
  advancedTexture.addControl(text);
  text.text = 'nice!';

  const mainCamera = scene.activeCamera;

  if (!mainCamera) return;

  mainCamera.viewport = new Viewport(0, 0, 1, 1);

  const camera2 = new ArcRotateCamera('camera2', 0, 0, 0, new Vector3(0, 0, 0), scene);
  const pos = characters.manRoot.position;
  camera2.target = new Vector3(pos.x, pos.y + 1.2, pos.z);
  camera2.alpha = 3.09;
  camera2.beta = 1.54;
  camera2.radius = 1.43;
  camera2.fov = 0.3;

  console.log('camera2.target.y ->', camera2.target.y);

  camera2.viewport = new Viewport(0, 0.5, 0.25, 0.25);
  camera2.attachControl(scene.getEngine().getRenderingCanvas()!, true);
  camera2.layerMask = 2;

  camera2.onViewMatrixChangedObservable.add(() => {
    console.log(
      'mainCamera ->',
      JSON.stringify(
        {
          alpha: camera2.alpha,
          beta: camera2.beta,
          radius: camera2.radius,
        },
        null,
        2
      )
    );
  });

  scene.activeCameras = [mainCamera, camera2];
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
