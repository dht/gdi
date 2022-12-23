import { MeshBuilder, StandardMaterial, Texture } from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials';
import { logTime, logTimeEnd, scene } from './isokit.globals';
import { color3, vector3, vectorRadians } from './isokit.helpers';

type InitMethod = (ground: IStudioGround) => void;

export const initGroundWithColor = (ground: IStudioGround) => {
    const {
        identifier,
        width,
        height,
        subdivisions,
        position,
        rotation,
        values,
    } = ground;

    const { diffuseColor, specularColor } = values ?? {};

    const item = MeshBuilder.CreateGround(
        identifier,
        {
            width,
            height,
            subdivisions,
        },
        scene
    );

    item.setEnabled(false);

    const materialId = `material-ground-${identifier}`;
    const groundMaterial = new StandardMaterial(materialId, scene);
    groundMaterial.specularColor = color3(specularColor);
    groundMaterial.diffuseColor = color3(diffuseColor);

    item.position = vector3(position ?? [0, 0, 0]);

    if (rotation) {
        item.rotation = vectorRadians(rotation);
    }

    item.material = groundMaterial;
    item.receiveShadows = true;

    // prevents flickering
    setTimeout(() => {
        item.setEnabled(true);
    }, 500);
};

let firstLoad = true;

export const initGroundWithTexture = (ground: IStudioGround) => {
    const {
        identifier,
        width,
        height,
        subdivisions,
        position,
        rotation,
        values,
    } = ground;
    const { diffuseColor, textureUrl, uScale, vScale } = values ?? {};

    const item = MeshBuilder.CreateGround(
        identifier,
        {
            width,
            height,
            subdivisions,
        },
        scene
    );

    item.setEnabled(false);

    const materialId = `material-ground-${identifier}`;
    const grassMaterial = new StandardMaterial(materialId, scene);

    grassMaterial.diffuseColor = color3(diffuseColor);
    item.material = grassMaterial;
    item.position = vector3(position ?? [0, 0, 0]);

    if (rotation) {
        item.rotation = vectorRadians(rotation);
    }

    const diffuseTexture = new Texture(textureUrl, scene);
    diffuseTexture.uScale = uScale;
    diffuseTexture.vScale = vScale;

    grassMaterial.diffuseTexture = diffuseTexture;

    diffuseTexture.onLoadObservable.addOnce(() => {
        // prevents flickering
        setTimeout(
            () => {
                item.setEnabled(true);
                firstLoad = false;
            },
            firstLoad ? 500 : 100
        );
    });
};

export const initGroundWithGrid = (ground: IStudioGround) => {
    const {
        identifier,
        width,
        height,
        subdivisions,
        position,
        rotation,
        values,
    } = ground;
    const { majorUnitFrequency, gridRatio, lineColor, opacity } = values ?? {};

    const item = MeshBuilder.CreateGround(
        identifier,
        {
            width,
            height,
            subdivisions,
        },
        scene
    );

    const materialId = `material-ground-${identifier}`;
    const defaultGridMaterial = new GridMaterial(materialId, scene as any);
    defaultGridMaterial.majorUnitFrequency = majorUnitFrequency;
    defaultGridMaterial.gridRatio = gridRatio;
    defaultGridMaterial.lineColor = color3(lineColor);

    item.position = vector3(position ?? [0, 0, 0]);

    if (rotation) {
        item.rotation = vectorRadians(rotation ?? [0, 0, 0]);
    }

    item.material = defaultGridMaterial as any;
    defaultGridMaterial.opacity = opacity;
};

export const map: Record<string, InitMethod> = {
    color: initGroundWithColor,
    texture: initGroundWithTexture,
    grid: initGroundWithGrid,
};

export const initGround = (item: IStudioGround) => {
    const { identifier, type } = item;

    const initMethod = map[type];

    if (initMethod) {
        logTime(`loadGround ${identifier}`);
        initMethod(item);
        logTimeEnd(`loadGround ${identifier}`);
    }
};

export const initGrounds = async (grounds: IStudioGrounds) => {
    logTime('loadGrounds');

    for (let ground of Object.values(grounds)) {
        const { identifier } = ground;
        logTime(`loadGround ${identifier}`);
        await initGround(ground);
        logTimeEnd(`loadGround ${identifier}`);
    }

    logTimeEnd('loadGrounds');
};
