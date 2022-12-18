import { generateReducersForStore } from 'redux-store-generator';
import { IStudioStore } from './types';
import p from '../package.json';
import { actions } from './actions';

export const initialState: IStudioStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateStudio: {
        isReady: false,
    },
    currentIdsStudio: {
        boardId: 'ville',
    },
    studioBoards: {
        ville: {
            id: 'ville',
            identifier: 'ville',
            name: 'Ville',
            backgroundType: 'color',
            backgroundValues: {
                color: [0.97, 0.97, 0.97, 1],
            },
            useRightHandedSystem: true,
            flyIn: {
                radius: 33,
                alpha: 0.5,
                beta: 1,
                target: [0, 0, 0],
            },
        },
    },
    studioCameras: {
        c1: {
            id: 'c1',
            boardId: 'ville',
            identifier: 'arc-camera-1',
            type: 'arc',
            values: {
                radius: 25,
                alpha: 1,
                beta: 1,
                target: [0, 0, 0],
                lowerRadiusLimit: 10,
                upperRadiusLimit: 30,
                lowerBetaLimit: 30,
                upperBetaLimit: 80,
            },
        },
    },
    studioGrounds: {
        g1: {
            id: 'g1',
            identifier: 'ground-1',
            type: 'color',
            boardId: 'ville',
            height: 60,
            width: 60,
            subdivisions: 10,
            position: {
                x: -2.32,
                y: 0,
                z: -3.65,
            },
            values: {
                specularColor: [255, 255, 255],
                diffuseColor: [255, 255, 255],
            },
            receiveShadows: true,
        },
    },
    studioExternals: {
        x1: {
            id: 'x1',
            boardId: 'ville',
            identifier: 'external-1',
            url: 'ville.glb',
        },
    },
    studioLights: {
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
    },
    studioPacks: {
        p1: {
            id: 'p1',
            boardId: 'ville',
            identifier: 'p1',
            capacity: 100,
            url: '/people-0.png',
        },
    },
    studioParticles: {
        i1: {
            id: 'i1',
            boardId: 'ville',
            identifier: 'particle-1',
            url: '/smoke.png',
            size: 1,
            speed: 1,
            maxLife: 16,
            emitRate: 10,
            position: { x: 0, y: 9, z: -3 },
        },
    },
    studioSounds: {
        s1: {
            id: 's1',
            boardId: 'ville',
            identifier: 'sound-1',
            url: '/ScottHolmesMusicCelebration.mp3',
        },
    },
    studioSprites: {
        p1: {
            id: 'p1',
            identifier: 'woman-dog-purple-hair.png',
            boardId: 'ville',
            packId: 'p1',
            isOnGround: true,
            source: {
                width: 233,
                height: 412,
            },
            size: {
                width: 233 * 0.006,
                height: 412 * 0.006,
            },
            position: {
                x: 0,
                y: 0,
                z: 3,
            },
        },
    },
    studioMicroAnimations: {
        a1: {
            id: 'a1',
            identifier: 'bird-1',
            boardId: 'ville',
            position: {
                x: -10.3,
                y: 5.4,
                z: 5.7,
            },
            url: '/bird-1.png',
            capacity: 1,
            cellSize: 289,
            size: 2,
            fromFrame: 0,
            toFrame: 3,
            loop: true,
            delay: 6000,
        },
    },
    studioVideos: {
        v1: {
            id: 'v1',
            boardId: 'ville',
            identifier: 'video-1',
            url: '/water-2.mp4',
            objectType: 'sphere',
            values: {
                diameterX: 9.3,
                diameterY: 9.3,
                diameterZ: 0,
            },
            specularColor: [0, 0, 0],
            position: {
                x: 15.9,
                y: 0.5,
                z: -8.57,
            },
            rotation: {
                x: 90,
                y: 0,
                z: 0,
            },
        },
    },
};
export const reducers = generateReducersForStore<IStudioStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.studioBoards.setAll({}));
        store.dispatch(actions.studioCameras.setAll({}));
        store.dispatch(actions.studioGrounds.setAll({}));
        store.dispatch(actions.studioExternals.setAll({}));
        store.dispatch(actions.studioLights.setAll({}));
        store.dispatch(actions.studioMicroAnimations.setAll({}));
        store.dispatch(actions.studioPacks.setAll({}));
        store.dispatch(actions.studioParticles.setAll({}));
        store.dispatch(actions.studioSounds.setAll({}));
        store.dispatch(actions.studioSprites.setAll({}));
        store.dispatch(actions.studioVideos.setAll({}));
    });
};
