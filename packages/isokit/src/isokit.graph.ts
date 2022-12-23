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
import { IGraphData, IGraphParams, IGraphPoints, IGraphPart } from './types';
import { color3 } from './isokit.helpers';

export const addGraphPart = (part: IGraphPart) => {
    const { id, x1, y1, x2, y2, color, alpha, zIndex } = part;
    /*-----------------------Car Body------------------------------------------*/

    const materialId = `mat-${id}`;
    var bodyMaterial = new StandardMaterial(materialId, scene);
    bodyMaterial.diffuseColor = color3(color);
    bodyMaterial.backFaceCulling = false;
    bodyMaterial.alpha = alpha;

    const z = 0 - zIndex;

    var side = [
        new Vector3(x1, 0, z),
        new Vector3(x1, y1, z),
        new Vector3(x2, y2, z),
        new Vector3(x2, 0, z),
    ];

    side.push(side[0]); //close trapezium

    // //Array of points for the extrusion path
    var extrudePath = [new Vector3(0, 0, 0), new Vector3(0, 0, 0.45)];

    // //Create body and apply material
    var carBody = MeshBuilder.ExtrudeShape(
        'body',
        { shape: side, path: extrudePath, cap: Mesh.CAP_ALL },
        scene
    );
    carBody.material = bodyMaterial;
    //Array of points for trapezium side of car.
};

export const graphPointsToGraphParts = (
    graphPoints: IGraphPoints,
    params: IGraphParams
) => {
    const { zIndex, color, alpha } = params;

    if (graphPoints.length < 2) {
        return [];
    }

    const firstPoint = graphPoints.shift()!;

    let index = 0;
    let baseX = firstPoint.x;
    let baseY = firstPoint.y;

    const output: IGraphPart[] = [];

    graphPoints.forEach((graphPoint) => {
        const { x, y } = graphPoint;

        output.push({
            id: String(index++),
            x1: baseX,
            y1: baseY,
            x2: x,
            y2: y,
            color,
            alpha,
            zIndex,
        });

        baseX = x;
        baseY = y;
    });

    return output;
};

export const renderGraph = (graphData: IGraphData) => {
    const { points, params } = graphData;
    const graphParts = graphPointsToGraphParts([...points], params);

    graphParts.forEach(addGraphPart);
};
