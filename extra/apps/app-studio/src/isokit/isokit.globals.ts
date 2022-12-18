import * as BABYLON from 'babylonjs';

export let DEBUG = true;
export let DEBUG_LEVEL = 1;

export let scene: BABYLON.Scene,
    engine: BABYLON.Engine,
    ground: BABYLON.GroundMesh,
    light: BABYLON.Light;

export const setScene = (value: BABYLON.Scene) => {
    scene = value;
};

export const setEngine = (value: BABYLON.Engine) => {
    engine = value;
};

export const setDebug = (value: boolean) => {
    DEBUG = value;
};

export const packs: Record<string, BABYLON.SpritePackedManager> = {};
export const sounds: Record<string, HTMLAudioElement> = {};

export const logTime = (message: string, level: number = 3) => {
    if (!DEBUG || DEBUG_LEVEL < level) {
        return;
    }

    console.time(message);
};

export const logTimeEnd = (message: string, level: number = 3) => {
    if (!DEBUG || DEBUG_LEVEL < level) {
        return;
    }

    console.timeEnd(message);
};
