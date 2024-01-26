import { ArcRotateCamera, HemisphericLight, Scene, SceneLoader, Vector3 } from '@babylonjs/core';
import { IDecal, actions } from '@gdi/store-iso';
import { addDecal, addElements, addRemoteScene, setDecalPick } from 'isokit2';
import { call, put, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';
import { mouthShapes } from './data/data.mouthShapes';
import { lights } from './data/data.niceLights';

const shapes: any = {};

export function* onSceneReady(ev: any) {
  const scene: Scene = ev.data.scene;

  console.log('7 ->', 7);

  const meshIds = scene.meshes.map((mesh: any) => mesh.id);

  const camera = scene.activeCamera as ArcRotateCamera;
  // camera.mode = Camera.ORTHOGRAPHIC_CAMERA;

  if (!camera) {
    return;
  }

  camera.target = new Vector3(0, 0.2, 0);
  // camera.target = new Vector3(0, 2, 0);
  camera.radius = 1 * 13;
  // camera.beta = 1.2;
  camera.alpha = (Math.PI / 4) * 3;
  camera.beta = (Math.PI / 4) * 1.8;

  addElements(lights);

  const allLights = scene.lights;

  SceneLoader.OnPluginActivatedObservable.add(function (loader: any) {
    if (loader.name === 'gltf') {
      // loader.animationStartMode = 3;
    }
  });

  const sun = allLights.find((l) => l.id === 'sun') as HemisphericLight;
  sun.dispose();

  console.log('123 ->', 123);

  const { meshes, animationGroups } = yield* call(addRemoteScene, {
    id: 'basic',
    meshNames: '',
    rootUrl: '/boards/assets/',
    fileName: 'basic.glb',
  });

  yield* call(addRemoteScene, {
    id: 'basic',
    meshNames: '',
    rootUrl: '/boards/assets/',
    fileName: 'phil.obj',
  });

  const ids = meshes.map((mesh: any) => mesh.id);

  animationGroups[1].play(true);

  // mouthShapes.forEach((decal: IDecal) => {
  //   const { id } = decal;
  //   const shape = addDecal(decal);
  //   shapes[id] = shape;
  // });

  // setDecalPick(mouthShapes[0]);
}

export function* root() {
  let channel;

  yield put(actions.sceneState.patch({ totalTime: 60 }));

  console.log('1 ->', 1);

  channel = customEvenChannel('scene/ready');
  yield takeEvery(channel, onSceneReady);

  console.log('4 ->', 4);
}

export const saga = {
  id: 'widgets.fourthWall',
  type: 'component',
  root: root,
  trigger: {
    eventNames: ['scene/ready'],
  },
};
