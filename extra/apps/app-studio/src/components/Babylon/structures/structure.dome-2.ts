import * as BABYLON from 'babylonjs';
import { GridMaterial } from '@babylonjs/materials/Grid';
import { FurMaterial } from '@babylonjs/materials/Fur';
import * as GUI from '@babylonjs/gui';
import { createTree } from './createTree';

const DARK_MODE = true;

const positions = [
    new BABYLON.Vector3(10, 6, -20),
    new BABYLON.Vector3(7, 6, -10),
    new BABYLON.Vector3(5, 6, 0),
    new BABYLON.Vector3(7, 6, 10),
    new BABYLON.Vector3(10, 6, 20),
];

const treePositions = [
    new BABYLON.Vector3(10, 3, -20),
    new BABYLON.Vector3(7, 3, -10),
    new BABYLON.Vector3(5, 3, 0),
    new BABYLON.Vector3(7, 3, 10),
    new BABYLON.Vector3(10, 3, 20),
];

const rotations = [
    new BABYLON.Vector3(0, -(Math.PI / 180) * 20, 20),
    new BABYLON.Vector3(0, -(Math.PI / 180) * 10, 40),
    new BABYLON.Vector3(0, 0, 0),
    new BABYLON.Vector3(0, (Math.PI / 180) * 10, 10),
    new BABYLON.Vector3(0, (Math.PI / 180) * 20, 30),
];

const colors = [
    new BABYLON.Color3(0.52, 0.41, 0.82),
    new BABYLON.Color3(0.82, 0.41, 0.32),
    new BABYLON.Color3(0.82, 0.11, 0.32),
    new BABYLON.Color3(0.52, 0.81, 0.32),
    new BABYLON.Color3(0.52, 0.81, 0.82),
];

const furAngle = [
    (Math.PI / 8) * 1,
    (Math.PI / 8) * 1,
    (Math.PI / 8) * 1,
    (Math.PI / 8) * 1,
    (Math.PI / 8) * 1,
];

export const addStructure = (scene: BABYLON.Scene) => {
    // Fur;

    const camera = new BABYLON.ArcRotateCamera(
        'camera',
        0,
        (5.2 * Math.PI) / 12,
        50,
        new BABYLON.Vector3(0, 0, 0),
        scene
    );

    const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(0, 1, 0),
        scene
    );

    var defaultGridMaterial = new GridMaterial('default', scene as any);
    defaultGridMaterial.majorUnitFrequency = 5;
    defaultGridMaterial.gridRatio = 0.5;

    var fruitMaterial = new GridMaterial('default', scene as any);
    fruitMaterial.majorUnitFrequency = 1;
    fruitMaterial.gridRatio = 0.2;
    fruitMaterial.mainColor = new BABYLON.Color3(1, 1, 0);
    fruitMaterial.lineColor = new BABYLON.Color3(0.5, 0.1, 0.5);

    let box = [];

    for (let i = 0; i < 5; i++) {
        var furMaterial_D = new FurMaterial('furD' + i, scene as any);
        furMaterial_D.highLevelFur = false;
        furMaterial_D.furLength = 1; // Represents the maximum length of the fur, which is then adjusted randomly. Default value is 1.
        furMaterial_D.furAngle = furAngle[i]; // Represents the angle the fur lies on the mesh from 0 to Math.PI/2. The default angle of 0 gives fur sticking straight up and PI/2 lies along the mesh.
        furMaterial_D.furColor = colors[i];

        box[i] = BABYLON.MeshBuilder.CreateSphere(
            'box-' + i,
            {
                diameter: 4,
            },
            scene
        );

        box[i].position = positions[i];
        box[i].rotation = rotations[i];
        (box[i] as any).material = furMaterial_D;

        const tree = generateTreeSimple(scene, colors[i]);

        tree.position = treePositions[i];

        var plane = BABYLON.MeshBuilder.CreatePlane(
            'plane',
            {
                height: 4,
                width: 6,
            },
            scene
        );

        plane.position = treePositions[i].clone();
        plane.position.y = 12;

        const y = ((i - 2) * (12 * Math.PI)) / 180;

        plane.rotation.y = (-Math.PI / 8) * 4 + y;

        var advanced = GUI.AdvancedDynamicTexture.CreateForMesh(plane as any);

        var button1 = GUI.Button.CreateSimpleButton('but1', 'Web Presence');
        button1.fontFamily = 'monospace';
        button1.fontSize = 100;
        button1.color = DARK_MODE ? '#fff' : '#333';
        button1.background = DARK_MODE ? '#112' : '#eef';
        button1.onPointerUpObservable.add(function () {
            alert('you did it!');
        });
        advanced.addControl(button1);
    }

    var ground = BABYLON.Mesh.CreateGroundFromHeightMap(
        'ground',
        '/hills-1.png',
        130,
        130,
        100,
        0,
        10,
        scene,
        false
    );

    var sphere = BABYLON.MeshBuilder.CreateIcoSphere(
        'sphere',
        { radius: 0.5, flat: true, subdivisions: 2 },
        scene
    );
    sphere.position.y = 6;
    sphere.position.x = 12.12;
    sphere.position.z = -19;
    (sphere as any).material = fruitMaterial;

    var groundMaterial = new GridMaterial('groundMaterial', scene as any);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 0.25;
    groundMaterial.gridRatio = 2;
    groundMaterial.backFaceCulling = false;
    groundMaterial.mainColor = DARK_MODE
        ? new BABYLON.Color3(1, 1, 1)
        : new BABYLON.Color3(0, 0, 0);

    groundMaterial.lineColor = DARK_MODE
        ? new BABYLON.Color3(0.0, 0.5, 0.5)
        : new BABYLON.Color3(0.7, 0.7, 0.7);

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
    skyMaterial.mainColor = DARK_MODE
        ? new BABYLON.Color3(0, 0.05, 0.05)
        : new BABYLON.Color3(0.8, 0.8, 0.95);

    skyMaterial.lineColor = DARK_MODE
        ? new BABYLON.Color3(0, 0.2, 0.2)
        : new BABYLON.Color3(0.8, 0.8, 0.8);

    skyMaterial.backFaceCulling = false;
    var skySphere = BABYLON.Mesh.CreateSphere('skySphere', 30, 110, scene);
    (skySphere as any).material = skyMaterial;

    // GUI
    var plane = BABYLON.MeshBuilder.CreatePlane(
        'plane',
        {
            size: 10,
        },
        scene
    );

    plane.position.y = 20;
    plane.position.x = -2;
    plane.rotation.y = (Math.PI / 8) * -4;

    var advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(
        plane as any
    );

    var button1 = GUI.Button.CreateSimpleButton('but1', 'Click Me');
    button1.width = 10;
    button1.height = 3;
    button1.fontFamily = 'monospace';
    button1.fontSize = 150;
    button1.color = DARK_MODE ? '#fff' : '#333';
    button1.background = DARK_MODE ? '#112' : '#eef';
    button1.onPointerUpObservable.add(function () {
        alert('you did it!');
    });
    advancedTexture.addControl(button1);

    return {
        camera,
    };
};

const generateTree = (scene: any, color: BABYLON.Color3) => {
    //leaf material
    var green = new BABYLON.StandardMaterial('green', scene);
    green.diffuseColor = new BABYLON.Color3(0, 1, 0);

    //trunk and branch material
    var bark = new BABYLON.StandardMaterial('bark', scene);
    bark.emissiveColor = color;
    bark.diffuseColor = new BABYLON.Color3(0, 0, 1);

    //Tree parameters
    var trunk_height = 7;
    var trunk_taper = 0.3;
    var trunk_slices = 2;
    var boughs = 1; // 1 or 2
    var forks = 3;
    var fork_angle = Math.PI / 4;
    var fork_ratio = 0.7;
    var branch_angle = Math.PI / 2;
    var bow_freq = 1;
    var bow_height = 2;
    var branches = 1;
    var leaves_on_branch = 0;
    var leaf_wh_ratio = 0;

    var tree = createTree(
        trunk_height,
        trunk_taper,
        trunk_slices,
        bark,
        boughs,
        forks,
        fork_angle,
        fork_ratio,
        branches,
        branch_angle,
        bow_freq,
        bow_height,
        leaves_on_branch,
        leaf_wh_ratio,
        green,
        scene
    );

    return tree;
};

const generateTreeSimple = (scene: any, color: BABYLON.Color3) => {
    //trunk and branch material
    var bark = new BABYLON.StandardMaterial('bark', scene);
    bark.emissiveColor = color;
    bark.emissiveTexture = new BABYLON.Texture('/grass.png', scene);
    bark.diffuseColor = DARK_MODE
        ? new BABYLON.Color3(0, 0, 1)
        : new BABYLON.Color3(0, 0, 0);
    bark.alpha = DARK_MODE ? 0.55 : 1;

    const tree = BABYLON.MeshBuilder.CreateCylinder(
        'id',
        {
            diameter: 0.3,
            height: 5,
            diameterBottom: 0.8,
        },
        scene
    );
    tree.material = bark;

    return tree;
};
