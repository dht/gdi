import {
  ArcRotateCamera,
  Scene as BabylonScene,
  Color4,
  Engine,
  FreeCamera,
  GroundMesh,
  UtilityLayerRenderer,
} from '@babylonjs/core';
import { IEnvironment, IIsoStore } from '@gdi/store-iso';
import { throttle } from 'lodash';
import { useEffect } from 'react';
import { invokeEvent } from 'shared-base';
import { setArcCamera, setGround, setMainCamera, setScene } from '../../../globals';
import { addElements } from '../../../iso.elements';
import { initGizmos, removeGizmoListener } from '../../../iso.gizmos';
import { attachListenerCamera } from '../../../iso.utils';
import { useEnvironment } from './useEnvironment';
import { step, stepThrottled } from '../../../utils/utils.effects';

type Options = {
  isAdhoc?: boolean;
  hideBase?: boolean;
  disableGizmos?: boolean;
  environment?: Partial<IEnvironment>;
};

export function useScene(canvasRef: any, elements: Partial<IIsoStore>, options: Options) {
  const { isAdhoc, disableGizmos, hideBase, environment } = options;

  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    const scene = new BabylonScene(engine);
    const utilLayer = new UtilityLayerRenderer(scene);

    scene.useRightHandedSystem = true;

    if (!isAdhoc) {
      setScene(scene);
    }

    if (!disableGizmos) {
      initGizmos();
    }

    scene.clearColor = new Color4(0, 0, 0, 0);

    addElements(elements, { hideBase });

    const arcCamera = scene.cameras.find((camera) => camera.id === 'arc');
    setArcCamera(arcCamera as ArcRotateCamera);

    if (arcCamera) {
      (arcCamera as ArcRotateCamera).upperRadiusLimit = 100;
      arcCamera.attachControl(canvasRef.current, true);
      scene.activeCamera = arcCamera;
    }

    const freeCamera = scene.cameras.find((camera) => camera.id === 'free');
    setMainCamera(freeCamera as FreeCamera);

    const ground = scene.meshes.find((mesh) => mesh.id === 'main-grid');

    setGround(ground as GroundMesh);

    attachListenerCamera('free', 'camera/move');
    attachListenerCamera('arc', 'camera/move');

    // scene.debugLayer.show();

    const updateFps = throttle(() => {
      const div = document.getElementById('fps');
      if (!div) return;
      div.innerHTML = engine.getFps().toFixed() + ' fps';
    }, 100);

    // Start the engine
    engine.runRenderLoop(() => {
      if (!scene) return;
      scene.render();
      updateFps();

      // scene time
      stepThrottled();
    });

    // onSceneReady
    scene.onReadyObservable.addOnce(() => {
      invokeEvent('scene/ready', { scene, isAdhoc });
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });

    return () => {
      removeGizmoListener();
      engine.stopRenderLoop();
      window.removeEventListener('resize', () => {});
      scene.dispose();
      engine.dispose();
    };
  }, []);

  useEnvironment(environment);
}