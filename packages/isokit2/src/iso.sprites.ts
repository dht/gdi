import { Sprite, SpritePackedManager } from '@babylonjs/core';
import { IPack, ISprite, IVector } from '@gdi/store-iso';
import { packs, scene } from './globals';
import { vector3 } from './iso.utils';

export const addPack = (item: IPack) => {
  const { identifier, capacity = 1, url } = item;

  packs[identifier] = new SpritePackedManager(identifier, url, capacity, scene);
};

export const addSprite = (sprite: ISprite) => {
  const { identifier, packId, position, values } = sprite;
  const { size, isOnGround } = values;

  const pack = packs[packId];

  if (!pack) {
    console.log(`packId ${packId} not found for sprite ${identifier}`);
    return;
  }

  try {
    const item = new Sprite(identifier, pack);

    const { width, height } = size;

    item.cellRef = identifier;
    item.width = width;
    item.height = height;

    item.position = vector3(position ?? [0, 0, 0]);

    if (isOnGround) {
      item.position.y = height / 2;
    }

    item.invertU = true;
  } catch (error: any) {
    console.error(error);
  }
};

export const moveSprite = (spriteId: string, position: IVector) => {
  const sprite = scene.getMeshById(spriteId);

  if (sprite) {
    sprite.position = vector3(position);
  }
};

export const changeMouth = (characterId: string, mouthShapeId: string) => {
  if (!scene.spriteManagers) {
    return;
  }

  const sm = scene.spriteManagers.find((sm: any) => sm.name === characterId);

  if (sm && sm.sprites.length > 0) {
    sm.sprites[0].cellRef = mouthShapeId + '.svg';
  }
};

export const moveSpeakingStone = (characterId: string) => {
  if (!scene.spriteManagers) {
    return;
  }

  const sm = scene.spriteManagers.find((sm: any) => sm.name === characterId);

  if (sm && sm.sprites.length > 0) {
    const { x, z } = sm.sprites[0].position;
    //   moveTorus(scene, { x, z });
  }
};
