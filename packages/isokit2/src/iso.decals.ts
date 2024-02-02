import * as BABYLON from '@babylonjs/core';
import { IDecal } from '@gdi/store-iso';
import { scene } from './globals';
import { vector3 } from './iso.utils';
import { initMaterialTexture } from './iso.material';
import { guid4 } from 'shared-base';

export const addDecal = (decal: IDecal, mesh?: any) => {
  const { id, material, position, scaling, values } = decal;
  const { destinationMeshId, cullBackFaces, localMode, angle = 0 } = values;
  const { id: materialId } = material ?? {};

  let existingDecal = scene.meshes.find((mesh) => mesh.id === id);
  const destMesh = mesh || scene.meshes.find((mesh) => mesh.id === destinationMeshId);

  if (existingDecal) {
    return existingDecal;
  }

  if (!destMesh) {
    return null;
  }

  let mat = scene.materials.find((material) => material.id === materialId);

  if (!mat) {
    mat = initMaterialTexture(material!);
  }

  existingDecal = BABYLON.MeshBuilder.CreateDecal(id, destMesh, {
    position: vector3(position),
    normal: vector3(values.normal),
    size: vector3(scaling),
    cullBackFaces,
    localMode,
    angle,
  });

  existingDecal.material = mat;
  return existingDecal;
};

export const setDecalPick = (decal: IDecal) => {
  var onPointerDown = function (evt: any) {
    if (evt.button !== 0) {
      return;
    }

    // check if we are under a mesh
    var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh: any) {
      return true; ///mesh === cat;
    });

    const { hit, pickedPoint, pickedMesh } = pickInfo;
    const normal = pickInfo.getNormal(true);

    if (hit && pickedPoint && normal) {
      const newDecal = { ...decal };
      newDecal.id = guid4();
      newDecal.position = [pickedPoint.x, pickedPoint.y, pickedPoint.z];
      newDecal.values.normal = [normal.x, normal.y, normal.z];

      addDecal(newDecal, pickedMesh);
    }
  };

  const engine = scene.getEngine();
  var canvas = engine.getRenderingCanvas();

  if (!canvas) {
    return;
  }

  canvas.addEventListener('pointerdown', onPointerDown, false);

  scene.onDispose = function () {
    canvas?.removeEventListener('pointerdown', onPointerDown);
  };
};
