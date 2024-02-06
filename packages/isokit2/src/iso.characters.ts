import { ArcRotateCamera } from '@babylonjs/core';
import { set } from 'lodash';
import { delay } from 'shared-base';
import { IDecal, ISceneCharacter } from '../../store-iso/dist/dts';
import { scene } from './globals';
import { addDecal } from './iso.decals';
import { addRemoteScene } from './iso.externals.add';
import { vector3 } from './iso.utils';

const STANDING_SIZE = 2.4;
const SITTING_SIZE = STANDING_SIZE / 2;

const characters: any = {};

export const focusCornerCamera = (left: boolean, mesh: any) => {
  const cameraId = left ? 'cornerCam1' : 'cornerCam2';

  const cornerCam = scene.cameras.find((c) => c.id === cameraId) as ArcRotateCamera;

  if (!cornerCam || !mesh) return;

  const alpha = cornerCam.alpha;
  const pos = mesh.position;
  cornerCam.target = vector3([pos.x, pos.y + SITTING_SIZE, pos.z]);
  cornerCam.alpha = alpha;

  return cornerCam;
};

export const addCharacter = async (character: ISceneCharacter) => {
  const {
    id,
    meshNames,
    url,
    animations,
    meshId,
    rootId,
    position,
    rotation,
    layerMask,
    cornerFocus,
    mouthDecal,
    mouthShapeUrls,
  } = character;

  const { meshes: m1, animationGroups: ag1 } = await addRemoteScene({
    id,
    meshNames,
    url,
  });

  const handlers: any = {};

  handlers.mesh = m1.find((mesh: any) => mesh.id === meshId);
  handlers.root = m1.find((mesh: any) => mesh.id === rootId);
  handlers.root.position = vector3(position);
  handlers.root.rotation = vector3(rotation);
  handlers.root.layerMask = layerMask;
  handlers.AGs = ag1;
  handlers.animations = animations;

  if (cornerFocus) {
    const cornerCam = focusCornerCamera(cornerFocus === 'left', handlers.root);
    if (cornerCam) {
      scene.addCamera(cornerCam);
    }
  }

  await delay(1000);

  if (mouthDecal && mouthShapeUrls) {
    handlers.mouthShapes = addMouth(handlers.mesh, mouthDecal, mouthShapeUrls);
  }

  characters[id] = handlers;

  showMouth(id, 'bmp');
};

export const showMouth = (characterId: string, shape: string) => {
  const character = characters[characterId];

  if (!character) return;

  const mouthShapes = character.mouthShapes;
  const mouthShape = mouthShapes[shape];

  if (!mouthShape) return;

  Object.keys(mouthShapes).forEach((key) => {
    mouthShapes[key].material.alpha = 0;
  });

  mouthShape.material.alpha = 1;
};

export const addMouth = (characterMesh: any, decal?: IDecal, mouthShapeUrls?: Json) => {
  if (!characterMesh || !decal || !mouthShapeUrls) return;

  const decals: any = {};

  for (let key of Object.keys(mouthShapeUrls ?? {})) {
    const textureUrl = mouthShapeUrls[key];

    const id = `${decal.id}-${key}`;

    const materialDefinition = {
      id: `mat-${id}`,
      type: 'texture' as any,
      values: {
        textureUrl,
        hasAlpha: true,
        zOffset: -2,
      },
    };

    const decalDefinition = {
      ...decal,
      id,
      material: materialDefinition,
    };

    set(decalDefinition, 'values.destinationMeshId', characterMesh.id);

    decals[key] = addDecal(decalDefinition);

    if (!decals[key]) continue;

    decals[key].material.alpha = 0;
  }

  return decals;
};
