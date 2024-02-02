import {
  ArcRotateCamera,
  Camera,
  Color3,
  Color4,
  FreeCamera,
  HemisphericLight,
  Mesh,
  Vector3,
} from '@babylonjs/core';
import { IMesh, IVector, IKeyframe, ICamera, IVector4, IColors, ILight } from '@gdi/store-iso';
import { debounce, throttle } from 'lodash';
import { invokeEvent } from 'shared-base';
import { scene } from './globals';
import { initMaterial } from './iso.material';
import { log } from './logs';
import { set } from 'lodash';

export const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export const radiansToDegrees = (radians: number): number => {
  return (radians * 180) / Math.PI;
};

export const vector3 = (vector?: IVector): Vector3 => {
  if (!vector) {
    return Vector3.Zero();
  }

  return new Vector3(vector[0], vector[1], vector[2]);
};

export const vector3r = (vector?: IVector): Vector3 => {
  if (!vector) {
    return Vector3.Zero();
  }

  return new Vector3(
    degreesToRadians(vector[0]),
    degreesToRadians(vector[1]),
    degreesToRadians(vector[2])
  );
};

export const color3 = (color: IVector): Color3 => {
  return new Color3(color[0], color[1], color[2]);
};

export const color4 = (color: IVector4): Color4 => {
  return new Color4(color[0], color[1], color[2], color[3]);
};

export const vectorRadians = (vector?: IVector): Vector3 => {
  if (!vector) {
    return Vector3.Zero();
  }

  return new Vector3(
    degreesToRadians(vector[0]),
    degreesToRadians(vector[1]),
    degreesToRadians(vector[2])
  );
};

export const vectorDegrees = (vector?: IVector): IVector => {
  if (!vector) {
    return [0, 0, 0];
  }

  return [radiansToDegrees(vector[0]), radiansToDegrees(vector[1]), radiansToDegrees(vector[2])];
};

export const vectorRounded = (vector?: IVector, numberOfDigits: number = 2): IVector => {
  if (!vector) {
    return [0, 0, 0];
  }

  return vector.map((v) => parseFloat(v.toFixed(numberOfDigits))) as IVector;
};

export const applyVectors = (mesh: Mesh, item: IMesh) => {
  const { position, rotation, scaling } = item;

  if (position) { mesh.position = vector3(position); } // prettier-ignore
  if (rotation) { mesh.rotation = vectorRadians(rotation); } // prettier-ignore

  mesh.scaling = scaling ? vector3(scaling) : Vector3.One();
};

export const getElement = (id: string) => {
  return (
    scene.meshes.find((mesh) => mesh.id === id) || scene.cameras.find((camera) => camera.id === id)
  );
};

export const getLight = (id: string) => {
  return scene.lights.find((light) => light.id === id);
};

export const getMesh = (id: string) => {
  return scene.meshes.find((mesh) => mesh.id === id);
};

export const applyKeyframe = (elementId: string, keyframe: IKeyframe) => {
  const element: any = getElement(elementId);

  if (!element || element.id === 'cornerCam1' || element.id === 'cornerCam2') {
    return;
  }

  invokeEvent('log/position', { id: elementId, keyframe });

  if (keyframe['position'] !== undefined) { element.position = vector3(keyframe.position); } // prettier-ignore
  if (keyframe['rotation'] !== undefined) { element.rotation = vectorRadians(keyframe.rotation); } // prettier-ignore
  if (keyframe['scaling'] !== undefined ) { element.scaling = vector3(keyframe.scaling); } // prettier-ignore
  if (keyframe['alpha'] !== undefined) { element.alpha = degreesToRadians(keyframe.alpha) } // prettier-ignore
  if (keyframe['beta'] !== undefined ) { element.beta = degreesToRadians(keyframe.beta) } // prettier-ignore
  if (keyframe['radius'] !== undefined ) { element.radius = keyframe.radius } // prettier-ignore

  // log('keyframe', elementId, { keyframe }, 'location_on');
};

export const applyMaterial = (mesh: Mesh, item: IMesh) => {
  const { id, material } = item;

  if (!material) {
    return;
  }

  material.id = `${id}-material`;
  mesh.material = initMaterial(material);
};

export const applyColors = (colors?: IColors, light?: HemisphericLight) => {
  const { diffuse, specular } = colors ?? {};

  if (!light) return;

  if (diffuse) {light.diffuse = color3(diffuse) } // prettier-ignore
  if (specular) {light.specular = color3(specular) } // prettier-ignore
};

export const getArcCameraInfo = (id: string, camera: ArcRotateCamera) => {
  const { alpha, beta, radius } = camera as ArcRotateCamera;

  return {
    cameraId: id,
    alpha: Math.round(radiansToDegrees(alpha)),
    beta: Math.round(radiansToDegrees(beta)),
    radius: Math.round(radius),
  };
};

export const getFreeCameraInfo = (id: string, camera: FreeCamera) => {
  const { position, rotation } = camera as FreeCamera;

  return {
    cameraId: id,
    position: vectorRounded([position.x, position.y, position.z]),
    rotation: vectorRounded(vectorDegrees([rotation.x, rotation.y, rotation.z])),
  };
};

export const getCamera = (cameraId: string) => {
  return scene.cameras.find((camera) => camera.id === cameraId);
};

export const getCameraInfo = (camera: ArcRotateCamera | FreeCamera) => {
  const { id } = camera;
  return camera instanceof ArcRotateCamera
    ? getArcCameraInfo(id, camera)
    : getFreeCameraInfo(id, camera);
};

export const getCameraInfoById = (cameraId: string) => {
  const camera = scene.cameras.find((camera) => camera.id === cameraId);

  if (!camera) {
    return {};
  }

  return getCameraInfo(camera as any);
};

export const attachListenerCamera = (cameraId: string, eventName: string) => {
  const camera = scene.cameras.find((camera) => camera.id === cameraId);

  if (!camera) {
    return;
  }

  const onCameraMove = throttle((camera: Camera) => {
    const info = getCameraInfo(camera as any);
    if (!info) return;
    invokeEvent(eventName, info);
  }, 100);

  const observer = camera.onViewMatrixChangedObservable.add(onCameraMove);
  return observer;
};

export const getMeshInfo = (mesh: Mesh) => {
  if (!mesh) {
    return {};
  }

  try {
    const { id, position, rotation, scaling } = mesh;

    return {
      id,
      position: vectorRounded([position.x, position.y, position.z]),
      rotation: vectorRounded(vectorDegrees([rotation.x, rotation.y, rotation.z])),
      scaling: vectorRounded([scaling.x, scaling.y, scaling.z]),
    };
  } catch (err) {
    return {};
  }
};

export const getMeshInfoById = (meshId: string) => {
  const mesh = scene.meshes.find((mesh) => mesh.id === meshId);

  if (!mesh) {
    return {};
  }

  return getMeshInfo(mesh as any);
};

export const applyMeshListeners = (mesh: Mesh, type: string) => {
  if (!mesh || ['center', 'main-grid'].includes(mesh.id)) {
    return;
  }

  const onMove = debounce(() => {
    const info = getMeshInfo(mesh);
    invokeEvent('element/move', info);
  }, 300);

  const observer = mesh.onAfterWorldMatrixUpdateObservable.add(onMove);
  return observer;
};

export const moveMesh = (id: string, position: IVector) => {
  const mesh = scene.meshes.find((mesh) => mesh.id === id);

  if (!mesh) {
    return;
  }

  mesh.position = vector3(position);
};

export const positionElement = (id: string, change: Json) => {
  const element = getElement(id);

  if (!element) {
    return;
  }

  for (let key of Object.keys(change)) {
    set(element, key, change[key]);
  }
};
