import {
  Color3,
  FreeCamera,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Vector3,
} from '@babylonjs/core';
import { scene } from './globals';
import { ISceneStage } from '@gdi/store-iso';
import { setCamera } from './iso.camera';
import { vector3, vectorRadians } from './iso.utils';

export const currentUrls = {
  skybox: '',
  stage: '',
};

type Id = 'skybox' | 'stage' | 'stage-mask';

export const changeImage = (id: Id, url: string, showAndFocus?: boolean) => {
  const material = scene.getMaterialByName(id + 'Material') as StandardMaterial;

  const texture = new Texture(url, scene);
  texture.hasAlpha = true;
  material.diffuseTexture = texture;

  if (showAndFocus) {
    showImage(id, true);
    focusOnImage();
  }
};

export const focusOnImage = () => {
  setCamera('free', false);

  const camera = scene.cameras.find((c) => c.id === 'free') as FreeCamera;

  if (!camera) {
    return;
  }

  camera.position = vector3([0, 0, 0]);
  camera.rotation = vectorRadians([0, 90, 0]);
};

export const showImage = (id: Id, show: boolean) => {
  const image = scene.getMeshByName(id + 'Mesh');

  if (!image) {
    return;
  }

  image.isVisible = show;
};

const mapPositionX = {
  skybox: 105,
  stage: 103,
  'stage-mask': 5,
};

const mapDimension = {
  skybox: [160, 90],
  stage: [-90, 90],
  'stage-mask': [-4.353, 4.353],
};

export const addImage = (id: Id, url: string) => {
  const dimension = mapDimension[id];
  const x = mapPositionX[id];

  const image = MeshBuilder.CreatePlane(
    id + 'Mesh',
    {
      width: dimension[0],
      height: dimension[1],
    },
    scene
  );
  image.layerMask = 1;

  const material = new StandardMaterial(id + 'Material', scene);

  material.diffuseColor = new Color3(255, 255, 255);
  material.backFaceCulling = false;

  image.rotation = new Vector3(0, 0, 0);

  image.position = new Vector3(x, 0, 0);

  // add image texture
  const texture = new Texture(url, scene);
  texture.hasAlpha = true;

  material.diffuseTexture = texture;

  image.rotation.y = Math.PI / 2;
  image.material = material;
  image.isVisible = true;

  return image;
};

export const addSkyBox = (url: string) => {
  return addImage('skybox', url);
};

export const changeSkyBox = (url: string, showAndFocus?: boolean) => {
  changeImage('skybox', url, showAndFocus);
};

export const focusOnSkyBox = () => {
  focusOnImage();
};

export const showSkyBox = (show: boolean) => {
  showImage('skybox', show);
};

export const addStage = (url: string) => {
  return addImage('stage', url);
};

export const changeStage = (url: string, showAndFocus?: boolean) => {
  changeImage('stage', url, showAndFocus);
};

export const addStageMask = (url: string) => {
  return addImage('stage-mask', url);
};

export const changeStageMask = (url: string, showAndFocus?: boolean) => {
  changeImage('stage-mask', url, showAndFocus);
};

export const prepareStage = (stage?: ISceneStage) => {
  if (!stage) return;

  const { bkUrl, stageUrl, stageMaskUrl } = stage;

  addSkyBox(bkUrl);
  addStage(stageUrl);
  addStageMask(stageMaskUrl);
  focusOnSkyBox();
};
