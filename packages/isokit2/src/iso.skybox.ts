import {
  Color3,
  FreeCamera,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Vector3,
} from '@babylonjs/core';
import { scene } from './globals';
import { setCamera } from './iso.camera';
import { vector3, vectorRadians } from './iso.utils';

export const changeSkyBox = (url: string, showAndFocus?: boolean) => {
  const skyboxMaterial = scene.getMaterialByName('skyboxMaterial') as StandardMaterial;
  skyboxMaterial.diffuseTexture = new Texture(url, scene);

  if (showAndFocus) {
    showSkyBox(true);
    focusOnSkyBox();
  }
};

export const focusOnSkyBox = () => {
  setCamera('free');

  const camera = scene.activeCamera as FreeCamera;

  if (!camera) {
    return;
  }

  camera.position = vector3([0, 0, 0]);
  camera.rotation = vectorRadians([0, 90, 0]);
};

export const showSkyBox = (show: boolean) => {
  const skyBox = scene.getMeshByName('skybox');

  if (!skyBox) {
    return;
  }

  skyBox.isVisible = show;
};

export const addSkyBox = (url: string) => {
  const skybox = MeshBuilder.CreatePlane('skybox', { width: 160, height: 90 }, scene);
  const skyboxMaterial = new StandardMaterial('skyboxMaterial', scene);

  skyboxMaterial.diffuseColor = new Color3(0, 0, 255);
  skyboxMaterial.specularColor = new Color3(0, 255, 0);
  skyboxMaterial.emissiveColor = new Color3(255, 255, 255);
  skyboxMaterial.backFaceCulling = false;

  skybox.rotation = new Vector3(0, 0, 0);
  skybox.position = new Vector3(105, 0, 0);

  // add image texture
  skyboxMaterial.diffuseTexture = new Texture(url, scene);
  skyboxMaterial.diffuseTexture.hasAlpha = true;

  skybox.rotation.y = Math.PI / 2;
  skybox.material = skyboxMaterial;
  skybox.isVisible = true;
};
