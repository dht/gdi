import { delay } from 'shared-base';
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
import { engine, scene, setScene, logTime, logTimeEnd } from './isokit.globals';
import {
    cameraFlyIn,
    initCameras,
    snoozeFlyIn,
    snoozeFlyInCheck,
} from './isokit.cameras';
import {
    MeshBuilder,
    StandardMaterial,
    Texture,
    SceneLoader,
    Vector3,
    Color3,
    Mesh,
} from '@babylonjs/core';
import {
    addGraphPart,
    graphPointsToGraphParts,
    renderGraph,
} from './isokit.graph';
import { graphData1, graphData2 } from './data/data.graph';

export const loadTimeline = async (timelineConfig: Json) => {
    console.log('timelineConfig ->', timelineConfig);

    initCameras({
        c1: {
            id: 'c1',
            boardId: 'ville',
            identifier: 'arc-camera-1',
            type: 'universal',
            position: { x: 10, y: 5, z: -30 },
            rotation: { x: 0, y: 0, z: 0 },
        },
    });

    initGrounds({
        g2: {
            id: 'g2',
            identifier: 'ground-2',
            type: 'grid',
            boardId: 'ville',
            height: 40,
            width: 160,
            subdivisions: 10,
            position: {
                x: 0,
                y: -0.1,
                z: 0,
            },
            rotation: {
                x: -90,
                y: 0,
                z: 0,
            },
            values: {
                majorUnitFrequency: 5,
                gridRatio: 0.5,
                lineColor: [0.3, 0.3, 0.3],
                opacity: 1,
            },
        },
    });

    initLights({
        l1: {
            id: 'l1',
            boardId: 'ville',
            identifier: 'sun-1',
            type: 'hemispheric',
            position: {
                x: 0,
                y: 50,
                z: 0,
            },
            specular: [1, 1, 0],
            diffuse: [1, 1, 1],
            intensity: 1,
        },
    });

    /*-----------------------Car Body------------------------------------------*/
    renderGraph(graphData1);
    renderGraph(graphData2);
};
