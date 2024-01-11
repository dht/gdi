import { ArcRotateCamera, Camera, FreeCamera, Vector3 } from '@babylonjs/core';
import { CameraType, IArcConfig, ICamera, IFreeConfig } from '@gdi/store-iso';
import { scene } from './globals';
import { degreesToRadians, getCamera, getCameraInfo, radiansToDegrees, vector3 } from './iso.utils';
import { invokeEvent } from 'shared-base';
import { animateItem } from './iso.animations';

export const addArcRotateCamera = (camera: ICamera) => {
  const { id, values, target } = camera;
  const { alpha = 1, beta = 1, radius = 1 } = values ?? {};

  const output = new ArcRotateCamera(
    id,
    degreesToRadians(alpha),
    degreesToRadians(beta),
    radius,
    Vector3.Zero(),
    scene
  );

  if (target) {
    output.setTarget(vector3(target));
  }

  return output;
};

export const addFreeCamera = (camera: ICamera) => {
  const { id, position, target } = camera;
  const output = new FreeCamera(id, vector3(position), scene);
  output.setTarget(vector3(target));
  return output;
};

export const initCamera = (camera: ICamera) => {
  const method = map[camera.type];

  if (!method) {
    throw new Error(`Camera type '${camera.type}' not supported.`);
  }

  return method(camera);
};

export const map: Record<CameraType, any> = {
  arc: addArcRotateCamera,
  free: addFreeCamera,
};

export const setCamera = (cameraId?: string) => {
  if (!cameraId) {
    return;
  }

  const camera = scene.activeCamera;

  if (camera) {
    camera.detachControl();
  }

  const nextCamera = scene.cameras.find((camera) => camera.id === cameraId);

  if (!nextCamera) {
    return;
  }

  nextCamera.attachControl();
  scene.activeCamera = nextCamera;

  setTimeout(() => {
    invokeEvent('camera/move', getCameraInfo(nextCamera as any));
  }, 100);
};

export const configArc = (config?: Partial<IArcConfig>) => {
  const {
    alpha,
    beta,
    lowerBetaLimit,
    lowerRadiusLimit,
    radius,
    target,
    upperBetaLimit,
    upperRadiusLimit,
  } = config ?? {};

  const camera = getCamera('arc') as ArcRotateCamera;

  if (!camera || !config) {
    return;
  }

  camera.alpha = alpha ?? camera.alpha;
  camera.beta = beta ?? camera.beta;
  // camera.lowerBetaLimit = lowerBetaLimit ?? camera.lowerBetaLimit;
  camera.lowerRadiusLimit = lowerRadiusLimit ?? camera.lowerRadiusLimit;
  camera.radius = radius ?? camera.radius;
  camera.target = vector3(target);
  camera.upperBetaLimit = upperBetaLimit ?? camera.upperBetaLimit;
  camera.upperRadiusLimit = upperRadiusLimit ?? camera.upperRadiusLimit;
};

export const moveArc = (values: Json, animated: boolean = true) => {
  const arc = getCamera('arc') as ArcRotateCamera;

  if (!arc) {
    return;
  }

  arc.target = vector3(values.target);

  if (!animated) {
    arc.alpha = degreesToRadians(values.alpha);
    arc.beta = degreesToRadians(values.beta);
    arc.radius = values.radius;
    return;
  }

  animateItem(
    'arc',
    {
      id: 'arc',
      duration: 1,
      from: {
        alpha: radiansToDegrees(arc.alpha),
        beta: radiansToDegrees(arc.beta),
        radius: arc.radius,
      },
      to: {
        alpha: values.alpha,
        beta: values.beta,
        radius: values.radius,
      },
      easing: [0.5, 0.5, 0.5, 0.5],
    },
    {}
  );
};

export const configFree = (config?: Partial<IFreeConfig>) => {
  const camera = getCamera('free') as ArcRotateCamera;

  if (!camera || config) {
    return;
  }
};

export const switchCamera = () => {
  const cameraId = scene.activeCamera?.id;
  const nextCameraId = cameraId === 'arc' ? 'free' : 'arc';
  setCamera(nextCameraId);
  return nextCameraId;
};
