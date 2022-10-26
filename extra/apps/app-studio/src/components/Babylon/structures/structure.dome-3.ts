import * as BABYLON from 'babylonjs';
import { GridMaterial } from '@babylonjs/materials/Grid';
import { Color3, Vector3 } from 'babylonjs';
import { positionSphere } from './positionSphere';

const DARK_MODE = true;
const SHOW_LIGHT_PLACEHOLDERS = false;

export const addStructure = (scene: BABYLON.Scene) => {
    // const axes = new BABYLON.AxesViewer(scene, 2);

    const camera = new BABYLON.ArcRotateCamera(
        'camera',
        0,
        (5.2 * Math.PI) / 12,
        10,
        new BABYLON.Vector3(0, 0, 0),
        scene
    );

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    camera.target = new BABYLON.Vector3(0, 0, 0);

    addLight(scene, {
        position: new BABYLON.Vector3(-1, 1, 0),
        type: 'hemispheric',
        specular: new BABYLON.Color3(1, 1, 1),
        diffuse: new BABYLON.Color3(1, 1, 1),
        groundColor: new BABYLON.Color3(1, 1, 1),
        intensity: 0.2,
    });

    addLight(scene, {
        position: new BABYLON.Vector3(-1, -1, 0),
        type: 'hemispheric',
        specular: new BABYLON.Color3(1, 1, 1),
        diffuse: new BABYLON.Color3(1, 1, 1),
        groundColor: new BABYLON.Color3(1, 1, 1),
        intensity: 0.3,
    });

    addLight(scene, {
        type: 'spot',
        position: new BABYLON.Vector3(3, 2, 2),
        specular: new BABYLON.Color3(0, 1, 1),
        intensity: 0.4,
    });

    addLight(scene, {
        position: new BABYLON.Vector3(3, 2, -2),
        type: 'spot',
        specular: new BABYLON.Color3(1, 1, 0),
        intensity: 0.3,
    });

    var sphere = BABYLON.MeshBuilder.CreateIcoSphere(
        'sphere',
        { radius: 0.2, flat: true, subdivisions: 2 },
        scene
    );

    // -90   +90
    // -180  +180
    // 0     +100

    const dy = 0.1;

    const pos = positionSphere(45, -40, 10);
    sphere.position.x = pos.x;
    sphere.position.y = pos.y;
    sphere.position.z = pos.z;

    var defaultGridMaterial = new GridMaterial('default', scene);
    defaultGridMaterial.majorUnitFrequency = 5;
    defaultGridMaterial.gridRatio = 0.5;

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

    var groundMaterial = new GridMaterial('groundMaterial', scene);
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
    ground.material = groundMaterial;

    BABYLON.SceneLoader.Append('/', 'all.obj', scene, function (scene) {
        // console.log(scene.meshes);
    });

    camera.lowerRadiusLimit = 3;
    camera.upperRadiusLimit = 5;
    camera.attachControl(true);

    return {
        camera,
    };
};

let placeholderIndex = 0;

function addPlaceholder(scene: BABYLON.Scene, options: LightOptions) {
    const { position, diffuse, specular } = options;

    if (!position) {
        return;
    }

    const placeholder = BABYLON.MeshBuilder.CreateSphere(
        `placeholder-${placeholderIndex++}`,
        {
            diameter: 0.5,
        },
        scene
    );

    placeholder.position = position;

    if (diffuse || specular) {
        const material = new BABYLON.StandardMaterial(
            `material-${placeholderIndex}`,
            scene
        );

        if (diffuse) {
            material.diffuseColor = diffuse;
        }

        if (specular) {
            material.specularColor = specular;
        }

        placeholder.material = material;
    }
}

type LightType = 'hemispheric' | 'point' | 'directional' | 'spot';

type LightOptions = {
    type: LightType;
    position?: BABYLON.Vector3;
    intensity?: number;
    diffuse?: BABYLON.Color3;
    specular?: BABYLON.Color3;
    groundColor?: BABYLON.Color3;
};

let lightIndex = 0;

function addLight(scene: BABYLON.Scene, options: LightOptions) {
    const {
        position = new Vector3(0, 0, 0),
        intensity = 1,
        diffuse,
        specular,
        groundColor,
    } = options;

    if (SHOW_LIGHT_PLACEHOLDERS) {
        addPlaceholder(scene, options);
    }

    const id = `light-${lightIndex++}`;

    let light: BABYLON.Light;

    switch (options.type) {
        case 'hemispheric':
            const lightHemispheric = new BABYLON.HemisphericLight(
                id,
                position,
                scene
            );

            if (groundColor) {
                lightHemispheric.groundColor = groundColor;
            }

            light = lightHemispheric;
            break;
        case 'directional':
            const lightDirectional = new BABYLON.DirectionalLight(
                id,
                new Vector3(0, 0, 0),
                scene
            );
            light = lightDirectional;
            break;

        case 'spot':
            const lightSpot = new BABYLON.SpotLight(
                id,
                position,
                new BABYLON.Vector3(0, -1, 0),
                Math.PI / 1,
                1,
                scene
            );

            lightSpot.setDirectionToTarget(new BABYLON.Vector3(0, 0, 0));

            light = lightSpot;

            break;
        case 'point':
            const lightPoint = new BABYLON.PointLight(id, position, scene);
            light = lightPoint;

            break;
    }

    light.intensity = intensity;

    if (diffuse) {
        light.diffuse = diffuse;
    }

    if (specular) {
        light.specular = specular;
    }
}
