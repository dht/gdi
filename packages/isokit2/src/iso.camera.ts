import { ArcRotateCamera, FreeCamera, Viewport } from '@babylonjs/core';
import { CameraType, IArcConfig, ICamera, IFreeConfig } from '@gdi/store-iso';
import { invokeEvent } from 'shared-base';
import { scene } from './globals';
import { animateItem } from './iso.animations';
import { degreesToRadians, getCamera, getCameraInfo, radiansToDegrees, vector3 } from './iso.utils';

export const applyValues = (camera: ArcRotateCamera | FreeCamera, values: Json) => {
  const { fov, layerMask, viewport } = values ?? {};

  if (fov) {
    camera.fov = fov;
  }

  if (layerMask) {
    camera.layerMask = layerMask;
  }

  if (viewport) {
    camera.viewport = new Viewport(viewport[0], viewport[1], viewport[2], viewport[3]);
  }

  return camera;
};

export const addArcRotateCamera = (camera: ICamera) => {
  const { id, values = {}, target = [0, 0, 0] } = camera;
  const { alpha = 1, beta = 1, radius = 1 } = values;

  const output = new ArcRotateCamera(
    id,
    degreesToRadians(alpha),
    degreesToRadians(beta),
    radius,
    vector3(target),
    scene
  );

  applyValues(output, values);

  return output;
};

export const addFreeCamera = (camera: ICamera) => {
  const { id, position, target, values } = camera;
  const { fov, layerMask, viewport } = values ?? {};

  const output = new FreeCamera(id, vector3(position), scene);
  output.setTarget(vector3(target));

  applyValues(output, values ?? {});

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

export const setCamera = (cameraId?: string, attachControl?: boolean) => {
  if (!cameraId || cameraId === scene.activeCamera?.id) {
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

  if (attachControl) {
    nextCamera.attachControl();
  }

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

export const switchCamera = (attachControl?: boolean) => {
  const cameraId = scene.activeCamera?.id;
  const nextCameraId = cameraId === 'arc' ? 'free' : 'arc';
  setCamera(nextCameraId, attachControl);
  return nextCameraId;
};

export const setActiveCameras = (activeCameras: string[] = []) => {
  const cameras = scene.cameras.filter((camera) => activeCameras.includes(camera.id));

  scene.activeCameras = cameras;
};
