import { HemisphericLight } from '@babylonjs/core';
import { logTime, logTimeEnd, scene } from './isokit.globals';
import { color3, vector3 } from './isokit.helpers';

type InitMethod = (light: IStudioLight) => void;

export const initLightHemispheric = (light: IStudioLight) => {
    const { identifier, position, specular, diffuse, intensity } = light;

    const item = new HemisphericLight(
        identifier,
        vector3(position ?? [0, 1, 0]),
        scene
    );

    item.specular = color3(specular as number[]);
    item.diffuse = color3(diffuse as number[]);
    item.intensity = intensity ?? 1;
};

export const map: Record<string, InitMethod> = {
    hemispheric: initLightHemispheric,
};

export const initLight = (item: IStudioLight) => {
    const { identifier, type } = item;

    const initMethod = map[type];

    if (initMethod) {
        logTime(`initLight ${identifier}`);
        initMethod(item);
        logTimeEnd(`initLight ${identifier}`);
    }
};

export const initLights = async (externals: IStudioLights) => {
    logTime('initLights');

    for (let light of Object.values(externals)) {
        const { identifier } = light;
        logTime(`initLight ${identifier}`);
        await initLight(light);
        logTimeEnd(`initLight ${identifier}`);
    }

    logTimeEnd('initLights');
};

export const turnOffLight = (lightName: string) => {
    const light = scene.lights.find((light) => light.name === lightName);

    if (!light) {
        return;
    }

    light.intensity = 0;
};
