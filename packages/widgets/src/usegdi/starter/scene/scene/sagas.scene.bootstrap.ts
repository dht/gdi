import {
  CreateBox,
  HDRCubeTexture,
  MeshBuilder,
  PBRMaterial,
  Scene,
  Texture,
} from '@babylonjs/core';
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
  'sceneCharacters',
];

export function* restoreScene() {
  const projectId = yield* select(selectors.base.$projectTag);
  const isRemoteData = yield* select(selectors.base.$isRemoteData);

  if (isRemoteData) {
    return;
  }

  try {
    const response = yield* call(runFunction, '/api/saves/scene/restore', {
      projectId,
    });

    yield call(getNodes, nodes);
  } catch (err) {
    console.log('err =>', err);
  }
}

export function* onSceneReady(ev: any) {
  const { data } = ev;
  const { autoHideExternals } = data;

  const scene = data.scene as Scene;

  if (!scene) {
    return;
  }

  yield put(actionsIso.sceneState.patch({ isLoading: true }));
  yield put(actionsIso.sceneCurrentIds.patch({ bitId: '' }));

  yield call(restoreScene);

  const { hideGrid } = yield* select(selectorsIso.raw.$rawSceneState);
  const elements = yield* select(selectorsIso.base.$elements);

  var hdrTexture = new HDRCubeTexture(
    'https://raw.githubusercontent.com/dht/gdi-assets/main/hdr/forest.hdr',
    scene,
    128,
    false,
    true,
    false,
    true
  );

  // Skybox
  var hdrSkybox = MeshBuilder.CreateBox('hdrSkyBox', { size: 1000.0 }, scene);
  var hdrSkyboxMaterial = new PBRMaterial('skyBox', scene);
  hdrSkyboxMaterial.backFaceCulling = true;
  hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
  hdrSkyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
  hdrSkyboxMaterial.microSurface = 1.0;
  hdrSkyboxMaterial.cameraExposure = 0.66;
  hdrSkyboxMaterial.cameraContrast = 1.66;
  hdrSkyboxMaterial.disableLighting = true;
  hdrSkybox.material = hdrSkyboxMaterial;
  hdrSkybox.infiniteDistance = true;

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
