import { IPostEffect, ISceneEffect } from '@gdi/store-iso';
import { effects } from '../effects';
import { allPipes } from '../iso.environment';
import { throttle } from 'lodash';

const RPS = 30; // times per second

const queue: IPostEffect[] = [];

export const playEffect = (effectId: string) => {
  const effect = effects[effectId];

  if (!effect) {
    return;
  }

  const { defaultDuration } = effect;

  const startTs = Date.now();
  const duration = defaultDuration;
  const endTs = startTs + duration;

  queue.push({
    ...effect,
    startTs,
    isRunning: false,
    duration,
    endTs,
  });
};

export const stopAllEffects = () => {
  queue.forEach((effect) => {
    effect.onCleanup();
  });

  queue.length = 0;
};

export const step = () => {
  if (!allPipes.main) {
    return;
  }

  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    stepEffect(item);
  }
};

export const stepThrottled = throttle(step, 1000 / RPS);

export const stepEffect = (effect: IPostEffect) => {
  const { startTs, endTs = 0 } = effect;

  if (!startTs) {
    return;
  }

  const inRange = Date.now() >= startTs && Date.now() < endTs;
  const isOver = Date.now() >= endTs;

  const now = Date.now();

  if (inRange) {
    if (!effect.isRunning) {
      effect.onSetup();
    }

    const progress = (now - startTs) / (endTs - startTs);
    effect.runAndApply(progress);
    effect.isRunning = true;
  }

  if (isOver) {
    effect.isRunning = false;
    queue.splice(queue.indexOf(effect), 1);
    effect.onCleanup();
    return;
  }
};
