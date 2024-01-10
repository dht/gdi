import { Animation, BezierCurveEase } from '@babylonjs/core';
import { IAnimation, IProperty } from '@gdi/store-iso';
import { scene } from './globals';
import { applyKeyframe, degreesToRadians, vector3, vector3r } from './iso.utils';
import { invokeEvent } from 'shared-base';

const FRAMES_PER_SECOND = 30;

const properties = ['position', 'rotation', 'scaling', 'alpha', 'beta', 'radius'];

type SourceDest = '0to0' | '0to1' | '1to0' | '1to1';

export const createAnimation = (animation: IAnimation) => {
  let output: Animation[] = [],
    instance;

  for (let property of properties) {
    const sourceDest = getSourceDest(animation, property as IProperty);

    if (sourceDest === '0to0' || sourceDest === '0to1' || sourceDest === '1to0') {
      continue;
    }

    instance = createAnimationForProperty(property as IProperty, animation);
    output.push(instance);
  }

  return output;
};

export const getSourceDest = (animation: IAnimation, property: IProperty): SourceDest => {
  const { from, to } = animation;

  const fromValue = from[property];
  const toValue = to[property];

  if (!fromValue && !toValue) {
    return '0to0';
  }

  if (fromValue && !toValue) {
    return '1to0';
  }

  if (!fromValue && toValue) {
    return '0to1';
  }

  return '1to1';
};

export const createAnimationForProperty = (property: IProperty, animation: IAnimation) => {
  const { id, easing, duration, from, to } = animation;

  const vectorProperties = ['position', 'rotation', 'scaling'];
  const dataType = vectorProperties.includes(property)
    ? Animation.ANIMATIONTYPE_VECTOR3
    : Animation.ANIMATIONTYPE_FLOAT;

  const output = new Animation(
    `${id}_${property}`,
    property,
    FRAMES_PER_SECOND,
    dataType,
    Animation.ANIMATIONLOOPMODE_CONSTANT
  );

  const bezierEase = easing
    ? new BezierCurveEase(easing[0], easing[1], easing[2], easing[3])
    : new BezierCurveEase(0.5, 0.5, 0.5, 0.5);

  output.setEasingFunction(bezierEase);

  const fromValue = parseValue(property, from[property]);
  const toValue = parseValue(property, to[property]);

  let keyframes: any[];
  keyframes = [];
  keyframes.push({ frame: 0, value: fromValue });
  keyframes.push({ frame: duration * FRAMES_PER_SECOND, value: toValue });

  output.setKeys(keyframes);

  return output;
};

export const parseValue = (property: IProperty, value: any) => {
  switch (property) {
    case 'position':
    case 'scaling':
      return vector3(value);
    case 'rotation':
      return vector3r(value);
    case 'alpha':
    case 'beta':
      return degreesToRadians(value);
    default:
      return value;
  }
};

type Options = {
  percent?: number;
  isPaused?: boolean;
};

export const animateItem = (itemId: string, animation: IAnimation, options: Options) => {
  const { percent = 0, isPaused = false } = options;

  const mesh = scene.meshes.find((mesh) => mesh.id === itemId);
  const camera = scene.cameras.find((camera) => camera.id === itemId);

  const item = mesh || camera;

  if (!item) {
    console.warn(`Item '${itemId}' not found.`);
    return;
  }

  invokeEvent('log/animation', { id: itemId, animation });

  applyKeyframe(itemId, animation.from);

  scene.stopAnimation(item);

  const instance = createAnimation(animation);
  item.animations = instance;

  const beginFrame = animation.duration * 30 * percent;
  let endFrame = animation.duration * 30;

  if (isPaused) {
    endFrame = beginFrame;
  }

  scene.beginAnimation(item, beginFrame, endFrame, false, 1);
};

export const stopAllAnimations = () => {
  scene.stopAllAnimations();
};
