import { Sprite, SpriteManager } from '@babylonjs/core';
import { IMicroAnimation, IVASP, VASPType } from '@gdi/store-iso';
import { vector3 } from './iso.utils';
import { scene } from './globals';

export const addMicroAnimation = (item: IMicroAnimation) => {
  const { identifier, position, values, url } = item;
  const { capacity = 1, cellSize, size, fromFrame = 0, toFrame, loop = false, delay = 0 } = values;

  const spriteManager = new SpriteManager(identifier, url, capacity, cellSize, scene);

  const spriteId = `${identifier}-sprite`;
  const mySprite = new Sprite(spriteId, spriteManager);
  mySprite.size = size;

  mySprite.position = vector3(position ?? [0, 0, 0]);

  mySprite.playAnimation(fromFrame, toFrame, loop, delay);
};
