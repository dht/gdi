import {
  ArcRotateCamera,
  MeshBuilder,
  PointerEventTypes,
  SceneLoader,
  StandardMaterial,
  Texture,
  Vector3,
} from '@babylonjs/core';
import * as GUI from '@babylonjs/gui';
import { scene } from './globals';
import { radiansToDegrees } from './iso.utils';

let params: any, destMesh: any, decalUrl: string;

export const initDecalPaste = async (url: string) => {
  decalUrl = url;

  const factor = 0.25;

  var decalSize = new Vector3(0.25 * factor, 0.25 * factor, 1 * factor);

  const projector = MeshBuilder.CreateBox(
    'projector',
    { width: decalSize.x, height: decalSize.y, depth: decalSize.z },
    scene
  );
  projector.material = new StandardMaterial('projectorMat', scene);
  projector.material.alpha = 0;
  projector.enableEdgesRendering(0.99);
  projector.edgesWidth = 1;
  projector.visibility = 0;

  const decalMaterial = new StandardMaterial('decalMat', scene);
  decalMaterial.diffuseTexture = new Texture(url, scene);
  decalMaterial.diffuseTexture.hasAlpha = true;
  decalMaterial.zOffset = -2;

  let decal: any;
  let isHovering = false;
  let angle = 0;
  let cullBackFaces = true;

  const createDecal = () => {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY, (mesh: any) => {
      return mesh.name.substr(0, 5) !== 'decal' && mesh.skeleton;
    });

    isHovering = pickResult.hit;
    if (pickResult.hit) {
      projector.visibility = 1;

      if (decal) {
        decal.dispose();
        decal = null;
      }

      const normal: any = scene.activeCamera?.getForwardRay().direction.negateInPlace().normalize();
      const position: any = pickResult.pickedPoint;
      const sourceMesh: any = pickResult.pickedMesh;
      destMesh = pickResult.pickedMesh;

      params = {
        position,
        normal,
        angle,
        size: decalSize,
        cullBackFaces,
        localMode: true,
      };

      decal = MeshBuilder.CreateDecal('decal', sourceMesh, params);
      decal.material = decalMaterial;

      const yaw = -Math.atan2(normal.z, normal.x) - Math.PI / 2;
      const len = Math.sqrt(normal.x * normal.x + normal.z * normal.z);
      const pitch = Math.atan2(normal.y, len);

      projector.position.copyFrom(position);
      projector.rotation.set(pitch, yaw, angle);
    } else {
      if (decal) decal.visibility = 0;
      projector.visibility = 0;
    }
  };

  const delay = 2;
  let count = 0;
  scene.onPointerMove = function (evt) {
    if (count === 0) {
      createDecal();
    }
    count = (count + 1) % delay;
  };

  let rmbDown = false;
  let animateCube = true;
  let t = 0;
  scene.onBeforeRenderObservable.add(() => {
    if (rmbDown) {
      angle += 0.025;
      createDecal();
    }
  });

  scene.onPointerObservable.add((evtData, evtState) => {
    switch (evtData.type) {
      case PointerEventTypes.POINTERUP:
        if (isHovering && decal && evtData.event.button === 0) {
          decal.clone('decal_cloned');
          logParams();
        }
        if (evtData.event.button === 2) {
          rmbDown = false;
        }
        break;
      case PointerEventTypes.POINTERDOWN:
        if (evtData.event.button === 2) {
          rmbDown = true;
        }
        break;
    }
  });

  const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');

  const sp = GUI.Checkbox.AddCheckBoxWithHeader('Cull back faces of decal', (value) => {
    cullBackFaces = value;
  });

  advancedTexture.addControl(sp);

  sp.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
  sp.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;

  if (sp.children[0]) {
    // @ts-ignore
    sp.children[0].checked = cullBackFaces;
  }

  sp.children[1].width = '230px';

  return scene;
};

export function logParams() {
  const { position, normal, angle, size, cullBackFaces, localMode } = params;

  const paramsParsed = {
    id: 'mouth_a',
    position: [position.x, position.y, position.z],
    scaling: [size.x, size.y, size.z],
    values: {
      normal: [radiansToDegrees(normal.x), radiansToDegrees(normal.y), radiansToDegrees(normal.z)],
      destinationMeshId: destMesh.id,
      cullBackFaces,
      localMode,
      angle,
    },
    material: {
      id: 'mouth-aie-texture',
      type: 'texture',
      values: {
        textureUrl: decalUrl,
        hasAlpha: true,
        zOffset: -3,
      },
    },
  };
}
