import * as BABYLON from 'babylonjs';
import { GridMaterial } from '@babylonjs/materials/Grid';
// import * as GUI from '@babylonjs/gui';

export const addStructure = (scene: BABYLON.Scene, palette: string[]) => {
    const camera = new BABYLON.ArcRotateCamera(
        'camera',
        -Math.PI / 3,
        (5 * Math.PI) / 12,
        50,
        new BABYLON.Vector3(0, 3, 0),
        scene
    );

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(0, 1, 0),
        scene
    );

    var light2 = new BABYLON.PointLight(
        'pointLight',
        new BABYLON.Vector3(40, 10, -10),
        scene
    );

    light2.diffuse = new BABYLON.Color3(0.2, 0.2, 0.3);

    var light3 = new BABYLON.PointLight(
        'pointLight',
        new BABYLON.Vector3(-10, 0, -40),
        scene
    );

    var light3 = new BABYLON.PointLight(
        'pointLight',
        new BABYLON.Vector3(0, 20, 0),
        scene
    );

    const firstIndex = 0;
    const lastIndex = palette.length - 1;
    const middleIndex = Math.floor(palette.length / 2);

    light3.diffuse = new BABYLON.Color3(0.2, 0.3, 0.3);

    var defaultGridMaterial = new GridMaterial('default', scene);
    defaultGridMaterial.majorUnitFrequency = 5;
    defaultGridMaterial.gridRatio = 0.5;

    var myMaterial1 = new BABYLON.StandardMaterial('myMaterial1', scene);
    myMaterial1.diffuseColor = BABYLON.Color3.FromHexString(
        palette[firstIndex]
    );
    myMaterial1.specularColor = new BABYLON.Color3(0, 0.4, 1);
    myMaterial1.emissiveColor = new BABYLON.Color3(0, 0, 0);
    myMaterial1.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

    var myMaterial2 = new BABYLON.StandardMaterial('myMaterial2', scene);
    myMaterial2.diffuseColor = BABYLON.Color3.FromHexString(
        palette[middleIndex]
    );
    myMaterial2.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    myMaterial2.emissiveColor = new BABYLON.Color3(0, 0, 0);
    myMaterial2.ambientColor = new BABYLON.Color3(0.93, 0.28, 0.53);

    var myMaterial3 = new BABYLON.StandardMaterial('myMaterial3', scene);
    myMaterial3.diffuseColor = BABYLON.Color3.FromHexString(palette[lastIndex]);
    myMaterial3.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    myMaterial3.emissiveColor = new BABYLON.Color3(0, 0, 0);
    myMaterial3.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

    const box1 = BABYLON.MeshBuilder.CreateBox(
        'box-1',
        {
            height: 14,
            width: 1.5,
            depth: 2.5,
        },
        scene
    );
    box1.position = new BABYLON.Vector3(-12, 5 + 7, -6);
    box1.material = myMaterial1;

    const box2 = BABYLON.MeshBuilder.CreateBox(
        'box-2',
        {
            height: 14,
            width: 2,
            depth: 1.5,
        },
        scene
    );
    box2.position = new BABYLON.Vector3(14, 5 + 3, -6);
    box2.material = myMaterial2;

    const box3 = BABYLON.MeshBuilder.CreateBox(
        'box-3',
        {
            height: 14,
            width: 1.5,
            depth: 1.9,
        },
        scene
    );
    box3.position = new BABYLON.Vector3(-15, 5 + 2.5, -20);
    box3.material = myMaterial3;

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

    var groundMaterial = new GridMaterial('groundMaterial', scene);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 0.45;
    groundMaterial.gridRatio = 2;
    groundMaterial.backFaceCulling = false;
    groundMaterial.mainColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    groundMaterial.lineColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    groundMaterial.opacity = 0.98;
    ground.material = groundMaterial;

    camera.attachControl(true);

    return {
        camera,
    };
};
