import * as BABYLON from 'babylonjs';
import { GridMaterial } from '@babylonjs/materials/Grid';
// import * as GUI from '@babylonjs/gui';

export const addStructure = (scene: BABYLON.Scene, palette: string[]) => {
    const camera = new BABYLON.ArcRotateCamera(
        'camera',
        7.5 * Math.PI,
        0,
        4,
        new BABYLON.Vector3(0, 0, 0),
        scene
    );

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    BABYLON.SceneLoader.Append('/', 'planet3.obj', scene, function (newMeshes) {
        console.log('newMeshes ->', newMeshes);

        // const root = newMeshes[0];
        // if (!root) {
        //     return;
        // }

        // root.position.set(23, 14.8, -38);

        // let item;

        // const meshes = scene.meshes.forEach((mesh) => {
        //     console.log('mesh ->', mesh);
        // });
    });

    const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(0, 10, 0),
        scene
    );

    var light3 = new BABYLON.PointLight(
        'pointLight',
        new BABYLON.Vector3(-10, 0, -40),
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

    camera.attachControl(true);

    return {
        camera,
    };
};
