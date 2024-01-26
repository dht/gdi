import { GizmoManager } from '@babylonjs/core';
import { gizmo, scene, setGizmo } from './globals';
import { base } from './base';

export const detachGizmo = () => {
  if (!gizmo) {
    return;
  }

  const giz =
    gizmo.gizmos.boundingBoxGizmo ||
    gizmo.gizmos.positionGizmo ||
    gizmo.gizmos.rotationGizmo ||
    gizmo.gizmos.scaleGizmo;

  if (!giz) {
    return;
  }

  giz.attachedMesh = null;
};

export const setGizmoMode = (mode: string) => {
  if (!gizmo) {
    return;
  }

  switch (mode) {
    case 'move':
      gizmo.positionGizmoEnabled = true;
      gizmo.rotationGizmoEnabled = false;
      gizmo.scaleGizmoEnabled = false;
      break;
    case 'rotate':
      gizmo.positionGizmoEnabled = false;
      gizmo.rotationGizmoEnabled = true;
      gizmo.scaleGizmoEnabled = false;
      break;
    case 'scale':
      gizmo.positionGizmoEnabled = false;
      gizmo.rotationGizmoEnabled = false;
      gizmo.scaleGizmoEnabled = true;
      break;
  }
};

export const initGizmos = () => {
  const gizmoManager = new GizmoManager(scene);
  gizmoManager.usePointerToAttachGizmos = true;
  gizmoManager.positionGizmoEnabled = true;
  gizmoManager.rotationGizmoEnabled = false;
  gizmoManager.scaleGizmoEnabled = false;

  setGizmo(gizmoManager);
  addGizmoListeners();
};

let unlisten: any;

export const addGizmoListeners = () => {
  unlisten = gizmo.onAttachedToMeshObservable.add((mesh: any) => {
    if (!mesh) return;

    if (base.all.includes(mesh.id)) {
      gizmo.attachToMesh(null);
    }
  });
};

export const removeGizmoListener = () => {
  if (!gizmo) {
    return;
  }

  gizmo.onAttachedToMeshObservable.remove(unlisten);
};
