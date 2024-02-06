import { MeshBuilder } from '@babylonjs/core';
import { IIsoStore, IMesh, MeshType } from '@gdi/store-iso';
import { gizmo, scene, setGizmo } from './globals';
import { applyMaterial, applyMeshListeners, applyVectors } from './iso.utils';
import { detachGizmo } from './iso.gizmos';
import { addObject } from './iso.meshes.add';
import { base } from './base';
import { draggedObject } from './components/Scene/hooks/usePick';
import { removeLight } from './iso.light.utils';

export const renameMesh = (meshId: string, newId: string) => {
  const mesh = scene.meshes.find((m) => m.id === meshId);

  if (!mesh) {
    return;
  }

  mesh.id = newId;
};

export const showMesh = (id: string, show: boolean) => {
  const item = scene.meshes.find((m) => m.id === id);

  if (!item) {
    return;
  }

  item.setEnabled(show);
};

export const showMeshes = (ids: Json, hideOthers: boolean = false) => {
  const keys = Object.keys(ids);

  for (let id of keys) {
    const show = ids[id];
    showMesh(id, show);
  }

  if (hideOthers) {
    scene.meshes
      .filter((m) => !keys.includes(m.id))
      .filter((m) => !base.all.includes(m.id))
      .filter((m) => !m.id.includes('skyboxMesh'))
      .filter((m) => !m.id.includes('stageMesh'))
      .filter((m) => !m.id.includes('stage-maskMesh'))
      .filter((m) => !m.id.includes('_handler'))
      .filter((m) => !m.id.includes('mouth'))
      .filter((m) => !m.id.startsWith('Object_'))
      .forEach((m) => {
        showMesh(m.id, false);
      });
  }
};

export const checkMeshExists = (meshId: string) => {
  const mesh = scene.meshes.find((m) => m.id === meshId);
  return mesh ? true : false;
};

export const removeMesh = (meshId: string) => {
  const mesh = scene.meshes.find((m) => m.id === meshId);

  if (!mesh) {
    return;
  }

  mesh.dispose();
};

export const getSelectedMesh = () => {
  const giz =
    gizmo.gizmos.boundingBoxGizmo ||
    gizmo.gizmos.positionGizmo ||
    gizmo.gizmos.rotationGizmo ||
    gizmo.gizmos.scaleGizmo;

  if (!giz) {
    return;
  }

  const mesh = giz.attachedMesh;

  return mesh;
};

export const removeAllMeshes = () => {
  const meshes = scene.meshes.filter((m) => m.id !== 'main-grid' && !m.id.includes('sun'));

  meshes.forEach((m) => {
    m.dispose();
  });
};

export const resetMeshVector = () => {
  console.log(2, draggedObject);
  if (!draggedObject) {
    return;
  }

  applyVectors(draggedObject, {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scaling: [1, 1, 1],
  } as any);
};

export const removeMeshesByContent = (content: IIsoStore) => {
  const { sceneMeshes, sceneLights } = content;

  const meshIds = Object.keys(sceneMeshes);
  const lightIds = Object.keys(sceneLights);

  [...meshIds].forEach((id) => {
    removeMesh(id);
  });

  [...lightIds].forEach((id) => {
    removeLight(id);
  });
};
