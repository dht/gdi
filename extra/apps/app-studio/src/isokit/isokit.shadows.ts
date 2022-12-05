import * as BABYLON from 'babylonjs';
import { scene, sounds } from './isokit.globals';

let shadows: string[] = [];

export const setShadows = (value: string[]) => {
    shadows = value;
};

export const initShadows = (lightName: string) => {
    const light = scene.lights.find((light) => {
        return light.name === lightName;
    });

    if (!light) {
        console.log(`could not find light ${lightName}`);
        return;
    }

    const shadowGenerator = new BABYLON.ShadowGenerator(1024, light as any);
    shadowGenerator.useExponentialShadowMap = true;
    shadowGenerator.usePoissonSampling = true;

    scene.meshes
        .filter((mesh) => {
            return shadows.includes(mesh.name);
        })
        .forEach((mesh) => {
            shadowGenerator.addShadowCaster(mesh);
        });
};
