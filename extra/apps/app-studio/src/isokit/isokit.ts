import * as BABYLON from 'babylonjs';
import {
    cameraFlyIn,
    initCameras,
    snoozeFlyIn,
    snoozeFlyInCheck,
} from './isokit.cameras';
import { delay, setJson, ts } from 'shared-base';
import { initBackground } from './isokit.background';
import { initGlow } from './isokit.glow';
import { initGrounds } from './isokit.grounds';
import { initLights, turnOffLight } from './isokit.lights';
import { initMicroAnimations } from './isokit.microAnimations';
import { initPacks } from './isokit.packs';
import { initParticles } from './isokit.particles';
import { initSounds } from './isokit.sounds';
import { initSprites } from './isokit.sprites';
import { initVideos } from './isokit.videos';
import { loadExternals } from './isokit.externals';
import { logTime, logTimeEnd, scene, setScene } from './isokit.globals';

export let wasLoaded = false;

export const setWasLoaded = (value: boolean) => {
    wasLoaded = value;
};

export const loadScene = async (
    scene: BABYLON.Scene,
    boardConfig: IBoardConfig
) => {
    setScene(scene);
    await loadBoard(boardConfig);
};

export const loadBoard = async (boardConfig: IBoardConfig) => {
    const {
        identifier,
        useRightHandedSystem,
        flyIn,
        cameras,
        grounds,
        externals,
        lights,
        microAnimations,
        packs,
        particles,
        sounds,
        sprites,
        videos,
    } = boardConfig;

    if (wasLoaded) {
        return;
    }

    wasLoaded = true;

    logTime(`loadScene ${identifier}`, 1);

    initBackground(boardConfig);
    scene.useRightHandedSystem = useRightHandedSystem;

    initLights(lights);
    initCameras(cameras);
    initGlow();
    initGrounds(grounds);

    await delay(10);

    loadExternals(externals);
    initMicroAnimations(microAnimations);
    initPacks(packs);
    initParticles(particles);
    initSprites(sprites);
    initVideos(videos);

    turnOffLight('sun-1');

    initSounds(sounds);

    if (flyIn && snoozeFlyInCheck()) {
        cameraFlyIn(flyIn);
        snoozeFlyIn({ minutes: 60 });
    }

    logTimeEnd(`loadScene ${identifier}`, 1);
};
