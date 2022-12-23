import { engine, scene } from './isokit.globals';

export const startRender = () => {
    engine.runRenderLoop(() => {
        scene.render();
    });
};
