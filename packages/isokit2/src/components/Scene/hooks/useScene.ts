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
import { useEffect, useState } from 'react';
import { invokeEvent } from 'shared-base';
import { setArcCamera, setGround, setMainCamera, setScene } from '../../../globals';
import { addElements } from '../../../iso.elements';
import { initGizmos, removeGizmoListener } from '../../../iso.gizmos';
import { attachListenerCamera } from '../../../iso.utils';
import { stepThrottled } from '../../../utils/utils.effects';
import { useEnvironment } from './useEnvironment';

type Options = {
  isAdhoc?: boolean;
  hideBase?: boolean;
  disableGizmos?: boolean;
  environment?: Partial<IEnvironment>;
  autoHideExternals?: boolean;
};

export function useScene(canvasRef: any, elements: Partial<IIsoStore>, options: Options) {
  const { isAdhoc, disableGizmos, hideBase, environment, autoHideExternals } = options;
  const [currentScene, setCurrentScene] = useState<any>();

  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    const scene = new BabylonScene(engine);
    const utilLayer = new UtilityLayerRenderer(scene);

    scene.useRightHandedSystem = true;

    // @ts-ignore
    window['scene'] = scene;

    setCurrentScene(scene);

    if (!isAdhoc) {
      setScene(scene);
    }

    if (!disableGizmos) {
      initGizmos();
    }

    scene.clearColor = new Color4(0, 0, 0, 0);

    addElements(elements, { hideBase, autoHideExternals });

    const arcCamera = scene.cameras.find((camera) => camera.id === 'arc');
    setArcCamera(arcCamera as ArcRotateCamera);

    if (arcCamera) {
      (arcCamera as ArcRotateCamera).upperRadiusLimit = 100;
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

    // onSceneReady
    scene.executeWhenReady(() => {
      invokeEvent('scene/ready', {
        scene,
        isAdhoc,
        autoHideExternals,
      });
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });

    // Start the engine
    engine.runRenderLoop(() => {
      if (!scene) return;

      scene.render();
      updateFps();

      // scene time
      stepThrottled();
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

  return currentScene;
}
