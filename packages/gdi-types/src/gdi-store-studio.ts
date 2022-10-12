// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A11 = {};

declare global {
    export type IStudioStore = StoreStructure & {
        appStateStudio: IStudioState;
        boards: IBoards;
        buildings: IBuildings;
        assets: IAssets;
        cameras: ICameras;
        lights: ILights;
        grounds: IGrounds;
        studioItems: IStudioItems;
        particles: IParticles;
    };

    export type IPosition = { x: number; y: number; z: number };
    export type IColor = { r: number; g: number; b: number; a?: number };
    export type ICameraType =
        | 'iso'
        | 'universal'
        | 'arc'
        | 'follow'
        | 'joystick'
        | 'vr';

    export type ICamera = {
        id: string;
        identifier: string;
        type: ICameraType;
        position: IPosition;
        target?: IPosition;
        isFreeHand?: boolean;
        test?: boolean;
        values?: Json;
        boardId: string;
    };

    export type ICameras = Record<string, ICamera>;

    export type IItemBase = {
        id: string;
        identifier: string;
        position?: IPosition;
        rotation?: IPosition;
        color?: IColor;
        boardId: string;
    };

    export type IGround = IItemBase & {
        type: 'ground';
        width: number;
        height: number;
        subdivisions?: number;
        updatable?: boolean;
        topographyImage?: string;
        topographyMaxHeight?: number;
        texture?: string;
        boardId: string;
    };

    export type IGrid = IItemBase & {
        type: 'grid';
        size: number;
        squares: number;
        showSquares?: boolean;
    };

    export type IGrounds = Record<string, IGround | IGrid>;

    export type IBox = IItemBase & {
        type: 'box' | 'cube';
        size: number;
    };

    export type ICylinder = IItemBase & {
        type: 'cylinder';
        diameter: number;
        height: number;
    };

    export type ISphere = IItemBase & {
        type: 'sphere';
        diameter: number;
    };

    export type IPlane = IItemBase & {
        type: 'plane';
        size: number;
    };

    export type ICircle = IItemBase & {
        type: 'circle';
        size: number;
    };

    export type IIcoSphere = IItemBase & {
        type: 'icoSphere';
        diameter: number;
        subdivisions: number;
    };

    export type ICone = IItemBase & {
        type: 'cone';
        diameter: number;
        height: number;
    };

    export type ITorus = IItemBase & {
        type: 'torus';
        diameter: number;
        thickness: number;
    };

    export type IPrism = IItemBase & {
        type: 'prism';
        diameter: number;
        height: number;
        tessellation: number;
    };

    export type IPyramid = IItemBase & {
        type: 'pyramid';
        diameter: number;
        height: number;
        tessellation: number;
    };

    export type IIso = IItemBase & {
        type: 'iso';
        assetId: string;
        width: number;
        height: number;
    };

    export type IVideo = IItemBase & {
        type: 'video';
        assetId: string;
        width: number;
        height: number;
        test?: boolean;
    };

    export type IPrimitives =
        | IGround
        | IBox
        | ICylinder
        | ISphere
        | IPlane
        | ICircle
        | IGrid
        | IIcoSphere
        | ICone
        | ITorus
        | IPrism
        | IPyramid;

    export type IStudioItem = IPrimitives | IIso | IVideo;
    export type IStudioItems = Record<string, IStudioItem>;

    export type IData = {
        ground: IStudioItem;
        cameras: ICamera[];
        particles: IParticle[];
        lights: ILight[];
        items: IStudioItem[];
    };

    export type IParticle = {
        id: string;
        identifier: string;
        count: number;
        texture: string;
        minVector: IPosition;
        maxVector: IPosition;
        color1?: IColor;
        color2?: IColor;
        colorDead?: IColor;
        minSize?: number;
        maxSize?: number;
        minLifeTime?: number;
        maxLifeTime?: number;
        emitRate?: number;
        blendMode?: number;
        gravity?: IPosition;
        direction1?: IPosition;
        direction2?: IPosition;
        minAngularSpeed?: number;
        maxAngularSpeed?: number;
        minEmitPower?: number;
        maxEmitPower?: number;
        updateSpeed?: number;
        addNoise?: boolean;
        noiseTextureSize?: number;
        noiseSpeedFactor?: number;
        noisePersistence?: number;
        noiseBrightness?: number;
        noiseOctaves?: number;
        noiseStrength?: IPosition;
    };

    export type IParticles = Record<string, IParticle>;

    export enum AssetType {
        RAW = 'RAW',
        COMPOSITE = 'COMPOSITE',
    }

    export type IAsset = {
        id: string;
        identifier: string;
        categoryId?: string;
        description?: string;
        type?: AssetType;
        url?: string;
        width?: number;
        height?: number;
        thumbWidth?: number;
        thumbHeight?: number;
        thumbUrl?: string;
        isPlaceholder?: boolean;
    };

    export type IAssetCategory = {
        id: string;
        title: string;
    };

    export type IAssetCategories = Record<string, IAssetCategory>;

    export type IAssets = Record<string, IAsset>;

    export type LightType = 'hemispheric' | 'point';

    export type ILight = {
        id: string;
        identifier: string;
        type: LightType;
        position?: IPosition;
        diffuse?: IColor;
        specular?: IColor;
        groundColor?: IColor;
        boardId: string;
    };

    export type ILights = Record<string, ILight>;

    export type BuildMethod = (itemData: IStudioItem) => any;

    export type BuildMap = Record<string, BuildMethod>;

    export type IBoard = {
        id: string;
        identifier: string;
        name: string;
        description?: string;
    };

    export type IBoards = Record<string, IBoard>;

    export type IBuilding = {
        id: string;
        identifier: string;
        width: number;
        height: number;
        assetId: string;
    };

    export type IBuildings = Record<string, IBuilding>;

    export type IBabylonData = {
        assets: IAssets;
        cameras: ICameras;
        lights: ILights;
        grounds: IGrounds;
        items: IStudioItems;
        particles: IParticles;
        boards: IBoards;
    };

    export type IStudioState = {
        stateKey: string;
        isReady: boolean;
        mode: string;
        selectedItemId?: string;
        currentBoardId?: string;
        flavour?: string;
    };

    export type IsoEvent =
        | 'BABYLON_ISO_HOVER'
        | 'BABYLON_ISO_HOVER_OUT'
        | 'BABYLON_ISO_PICK'
        | 'BABYLON_ISO_MOVE_START'
        | 'BABYLON_ISO_MOVE_END'
        | 'BABYLON_KEY_DOWN'
        | 'BABYLON_KEY_UP';
}
