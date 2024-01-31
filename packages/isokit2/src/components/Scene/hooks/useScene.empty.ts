import { Scene as BabylonScene, Engine, MeshBuilder } from '@babylonjs/core';
import { useEffect } from 'react';

export function useSceneEmpty(canvasRef: any) {
  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    const scene = new BabylonScene(engine);

    scene.useRightHandedSystem = true;
    scene.createDefaultCameraOrLight(true, true, true);

    const box = MeshBuilder.CreateBox('box', { size: 0.1 }, scene);

    // Start the engine
    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      engine.stopRenderLoop();
      scene.dispose();
      engine.dispose();
    };
  }, []);
}
