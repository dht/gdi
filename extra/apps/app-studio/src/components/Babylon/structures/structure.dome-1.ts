import * as BABYLON from 'babylonjs';
import { GridMaterial } from '@babylonjs/materials/Grid';
import * as GUI from '@babylonjs/gui';

export const addStructure = (scene: BABYLON.Scene) => {
    const camera = new BABYLON.ArcRotateCamera(
        'camera',
        -Math.PI / 3,
        (5 * Math.PI) / 12,
        50,
        new BABYLON.Vector3(0, 0, 0),
        scene
    );

    // camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
    // camera.orthoTop = 20;
    // camera.orthoBottom = -20;
    // camera.orthoLeft = -20;
    // camera.orthoRight = 20;

    const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(0, 1, 0),
        scene
    );

    var defaultGridMaterial = new GridMaterial('default', scene as any);
    defaultGridMaterial.majorUnitFrequency = 5;
    defaultGridMaterial.gridRatio = 0.5;

    const box1 = BABYLON.MeshBuilder.CreateCylinder(
        'box-1',
        {
            diameter: 1.5,
            height: 10,
            tessellation: 7,
        },
        scene
    );

    box1.position = new BABYLON.Vector3(-12, 5 + 5, -6);
    (box1 as any).material = defaultGridMaterial;

    const torus = BABYLON.MeshBuilder.CreateTorus(
        'torus',
        {
            diameter: 1.3,
        },
        scene
    );
    torus.position = new BABYLON.Vector3(-12, 5 + 5, -6);

    const particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene);
    particleSystem.emitRate = 50;
    particleSystem.color1 = new BABYLON.Color4(0, 0, 1, 0.7);
    particleSystem.color2 = new BABYLON.Color4(0, 1, 1, 0.7);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture(
        'https://playground.babylonjs.com/textures/flare.png',
        scene
    );

    // Position where the particles are emiited from
    particleSystem.emitter = new BABYLON.Vector3(-12, 5 + 12, -6);

    particleSystem.start();

    BABYLON.ParticleHelper.CreateDefault(
        new BABYLON.Vector3(-12, 15, -6),
        500,
        scene
    ).start();

    var ground = BABYLON.Mesh.CreateGroundFromHeightMap(
        'ground',
        'https://playground.babylonjs.com/textures/heightMap.png',
        130,
        130,
        100,
        0,
        10,
        scene,
        false
    );

    var groundMaterial = new GridMaterial('groundMaterial', scene as any);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 0.45;
    groundMaterial.gridRatio = 2;
    groundMaterial.backFaceCulling = false;
    groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
    groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    groundMaterial.opacity = 0.98;
    (ground as any).material = groundMaterial;

    camera.attachControl(true);
    // This creates a basic Babylon Scene object (non-mesh)
    // var camera = new BABYLON.ArcRotateCamera(
    //     'camera1',
    //     -Math.PI / 3,
    //     (5 * Math.PI) / 12,
    //     50,
    //     new BABYLON.Vector3(0, 5, 0),
    //     scene
    // );

    var skyMaterial = new GridMaterial('skyMaterial', scene as any);
    skyMaterial.majorUnitFrequency = 6; // 6;
    skyMaterial.minorUnitVisibility = 0.4; //0.43;
    skyMaterial.gridRatio = 0.5; // 0.5;
    skyMaterial.mainColor = new BABYLON.Color3(0, 0.05, 0.05);
    skyMaterial.lineColor = new BABYLON.Color3(0, 0.2, 0.2);
    skyMaterial.backFaceCulling = false;
    var skySphere = BABYLON.Mesh.CreateSphere('skySphere', 30, 110, scene);
    (skySphere as any).material = skyMaterial;

    // GUI
    var plane = BABYLON.MeshBuilder.CreatePlane(
        'plane',
        {
            size: 2,
        },
        scene
    );

    plane.parent = box1;
    plane.position.y = 2;
    plane.position.x = -2;

    var advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(
        plane as any
    );

    var button1 = GUI.Button.CreateSimpleButton('but1', 'Click Me');
    button1.width = 10;
    button1.height = 3;
    button1.color = 'white';
    button1.fontFamily = 'monospace';
    button1.fontSize = 150;
    button1.background = 'green';
    button1.onPointerUpObservable.add(function () {
        alert('you did it!');
    });
    advancedTexture.addControl(button1);

    var sphere = BABYLON.MeshBuilder.CreateSphere(
        'sphere',
        { diameter: 9, segments: 20 },
        scene
    );
    sphere.position.y = 22;
    sphere.position.x = -16;
    sphere.position.z = 40;
    (sphere as any).material = defaultGridMaterial;
    var knotMaterial = new GridMaterial('knotMaterial', scene as any);
    knotMaterial.majorUnitFrequency = 8;
    knotMaterial.minorUnitVisibility = 0.45;
    knotMaterial.gridRatio = 0.3;
    knotMaterial.mainColor = new BABYLON.Color3(0, 0, 0);
    knotMaterial.lineColor = new BABYLON.Color3(0.0, 1.0, 0.0);
    var knot = BABYLON.MeshBuilder.CreateTorusKnot(
        'knot',
        {
            radius: 3,
            tube: 1,
            radialSegments: 128,
            tubularSegments: 64,
            p: 2,
            q: 3,
        },
        scene
    );
    knot.position.y = 17.0;
    knot.position.x = 0;
    knot.position.z = 40;
    (knot as any).material = knotMaterial;

    return {
        camera,
        sphere,
        knot,
    };
};
