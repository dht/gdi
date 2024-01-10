import { IDot, IAnimation } from '@gdi/store-iso';
import { uniq, get } from 'lodash';

export const dotsToAnimation = (dots: IDot[], bitId: string, duration: number) => {
  let output: IAnimation[] = [];

  const cameraIds = dots.map((dot) => dot.cameraId).filter((i) => i);
  const meshIds = dots.map((dot) => dot.meshId).filter((i) => i);

  uniq(cameraIds).forEach((cameraId) => {
    const pair = getPair(dots, bitId, cameraId!);
    const animation = createCameraAnimation(cameraId!, pair, duration);
    output.push(animation);
  });

  uniq(meshIds).forEach((meshId) => {
    const pair = getPair(dots, bitId, meshId!);
    const animation = createMeshAnimation(meshId!, pair, duration);
    output.push(animation);
  });

  return output;
};

export const getPair = (dots: IDot[], bitId: string, objectId: string) => {
  const startId = `dot_${bitId}_${objectId}_start`;
  const endId = `dot_${bitId}_${objectId}_end`;

  const startDot = dots.find((dot) => dot.id === startId);
  const endDot = dots.find((dot) => dot.id === endId);

  return { startDot, endDot };
};

export const createArcCameraAnimation = (id: string, pair: any, duration: number) => {
  const { startDot, endDot } = pair;

  return {
    id,
    from: {
      alpha: get(startDot, 'values.alpha'),
      beta: get(startDot, 'values.beta'),
      radius: get(startDot, 'values.radius'),
    },
    to: {
      alpha: get(endDot, 'values.alpha'),
      beta: get(endDot, 'values.beta'),
      radius: get(endDot, 'values.radius'),
    },
    easing: get(startDot, 'easing'),
    duration,
  };
};

export const createVectorAnimation = (id: string, pair: any, duration: number) => {
  const { startDot, endDot } = pair;

  return {
    id,
    from: {
      position: get(startDot, 'values.position'),
      rotation: get(startDot, 'values.rotation'),
      scaling: get(startDot, 'values.scaling'),
    },
    to: {
      position: get(endDot, 'values.position'),
      rotation: get(endDot, 'values.rotation'),
      scaling: get(endDot, 'values.scaling'),
    },
    easing: get(startDot, 'easing'),
    duration,
  };
};

export const createFreeCameraAnimation = (id: string, pair: any, duration: number) => {
  return createVectorAnimation(id, pair, duration);
};

export const createCameraAnimation = (id: string, pair: any, duration: number) => {
  const isArc = id.includes('arc');

  return isArc
    ? createArcCameraAnimation(id, pair, duration)
    : createFreeCameraAnimation(id, pair, duration);
};

export const createMeshAnimation = (id: string, pair: any, duration: number) => {
  return createVectorAnimation(id, pair, duration);
};
