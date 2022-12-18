// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A18 = {};

declare global {
    export type IStudioStore = StoreStructure & {
        meta: IGdiMeta;
        appStateStudio: IStudioState;
        currentIdsStudio: IStudioCurrentIds;
        studioBoards: IStudioBoards;
        studioCameras: IStudioCameras;
        studioGrounds: IStudioGrounds;
        studioExternals: IStudioExternals;
        studioLights: IStudioLights;
        studioMicroAnimations: IStudioMicroAnimations;
        studioPacks: IStudioPacks;
        studioParticles: IStudioParticles;
        studioSounds: IStudioSounds;
        studioSprites: IStudioSprites;
        studioVideos: IStudioVideos;
    };

    export type IStudioState = {
        isReady: boolean;
    };

    export type IStudioCurrentIds = {
        boardId: string;
    };

    export type IPosition = { x: number; y: number; z: number };
    export type IColor = number[];
    export type ICameraType =
        | 'iso'
        | 'universal'
        | 'arc'
        | 'follow'
        | 'joystick'
        | 'vr';

    export type IBoard = {
        id: string;
        identifier: string;
        name: string;
        description?: string;
        useRightHandedSystem?: boolean;
        backgroundType: 'transparent' | 'color' | 'texture' | 'triangles';
        backgroundValues?: Json;
        flyIn?: Json;
    };

    export type IStudioBoards = Record<string, IBoard>;

    export type IStudioBase = {
        id: string;
        identifier: string;
        position?: IPosition;
        rotation?: IPosition;
        color?: IColor;
        boardId: string;
    };

    export type IStudioCamera = IStudioBase & {
        type: ICameraType;
        values?: Json;
    };

    export type IStudioCameras = Record<string, IStudioCamera>;

    export type IStudioGround = IStudioBase & {
        width: number;
        height: number;
        type: 'color' | 'texture' | 'grid';
        subdivisions?: number;
        receiveShadows?: boolean;
        values?: Json;
    };

    export type IStudioGrounds = Record<string, IStudioGround>;

    export type IStudioExternal = IStudioBase & {
        url: string;
    };

    export type IStudioExternals = Record<string, IStudioExternal>;

    export type LightType = 'hemispheric' | 'point';

    export type IStudioLight = IStudioBase & {
        type: LightType;
        diffuse?: IColor;
        specular?: IColor;
        groundColor?: IColor;
        intensity?: number;
    };

    export type IStudioLights = Record<string, IStudioLight>;

    export type IStudioMicroAnimation = IStudioBase & {
        url: string;
        capacity?: number;
        cellSize: number;
        size: number;
        fromFrame?: number;
        toFrame: number;
        loop?: boolean;
        delay?: number;
    };

    export type IStudioMicroAnimations = Record<string, IStudioMicroAnimation>;

    export type IStudioPack = IStudioBase & {
        capacity: number;
        url: string;
    };

    export type IStudioPacks = Record<string, IStudioPack>;

    export type IStudioParticle = IStudioBase & {
        url: string;
        size: number;
        speed?: number;
        maxLife: number;
        emitRate: number;
    };

    export type IStudioParticles = Record<string, IStudioParticle>;

    export type IStudioSprite = IStudioBase & {
        packId: string;
        source: { width: number; height: number };
        size: { width: number; height: number };
        isOnGround?: boolean;
        isHidden?: boolean;
    };

    export type IStudioSprites = Record<string, IStudioSprite>;

    export type IStudioSound = IStudioBase & {
        url: string;
    };

    export type IStudioSounds = Record<string, IStudioSound>;

    export type IStudioVideo = IStudioBase & {
        url: string;
        objectType: 'sphere' | 'plane';
        values: Json;
        specularColor?: IColor;
    };

    export type IStudioVideos = Record<string, IStudioVideo>;

    export type IsoEvent =
        | 'BABYLON_ISO_HOVER'
        | 'BABYLON_ISO_HOVER_OUT'
        | 'BABYLON_ISO_PICK'
        | 'BABYLON_ISO_MOVE_START'
        | 'BABYLON_ISO_MOVE_END'
        | 'BABYLON_KEY_DOWN'
        | 'BABYLON_KEY_UP';

    export type IBoardConfig = IBoard & {
        cameras: IStudioCameras;
        grounds: IStudioGrounds;
        externals: IStudioExternals;
        lights: IStudioLights;
        microAnimations: IStudioMicroAnimations;
        packs: IStudioPacks;
        particles: IStudioParticles;
        sounds: IStudioSounds;
        sprites: IStudioSprites;
        videos: IStudioVideos;
    };
}
