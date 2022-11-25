import { generateReducersForStore } from 'redux-store-generator';
import { IStudioStore } from './types';
import { actions } from './actions';
import p from '../package.json';

export const initialState: IStudioStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateStudio: {
        stateKey: 'studio',
        isReady: false,
        mode: '',
        currentBoardId: 'work',
        flavour: 'main',
    },
    boards: {
        work: {
            id: 'work',
            identifier: 'work',
            name: 'work',
        },
    },
    buildings: {
        alchemist: {
            id: 'alchemist',
            identifier: 'alchemist',
            assetId: 'alchemist',
            width: 0.9433962264150944,
            height: 0.8982035928143712,
        },
    },
    assets: {
        alchemist: {
            id: 'alchemist',
            identifier: 'alchemist',
            width: 1172,
            height: 1110,
            url: '/iso/_raw/alchemist.png',
            thumbWidth: 167,
            thumbHeight: 159,
            thumbUrl: '/iso/alchemist-small.png',
        },
    },
    cameras: {
        'camera-1-work': {
            id: 'camera-1-work',
            identifier: 'camera-1-work',
            position: { x: 5, y: 6, z: -5 },
            type: 'iso',
            target: { x: 0, y: 1, z: 0 },
            boardId: 'work',
        },
    },
    grounds: {
        '1b-alignment': {
            id: '1b-alignment',
            identifier: '1b-alignment',
            type: 'grid',
            size: 8,
            position: { x: 0, y: 0, z: 0 },
            squares: 32,
            showSquares: true,
            boardId: 'alignment',
        },
    },
    lights: {
        'hemispheric-alignment': {
            id: 'hemispheric-alignment',
            identifier: 'hemispheric-alignment',
            type: 'hemispheric',
            position: { x: 0, y: 1, z: 0 },
            diffuse: { r: 0.7, g: 0.75, b: 0.75 },
            specular: { r: 0, g: 0, b: 0 },
            groundColor: { r: 0, g: 0, b: 0 },
            boardId: 'alignment',
        },
    },
    particles: {
        flare: {
            id: 'flare',
            identifier: 'flare',
            count: 2000,
            texture: '/textures/flare.png',
            minVector: { x: -0.2, y: -0.2, z: -0.2 },
            maxVector: { x: 0.2, y: 0.2, z: 0.2 },
            emitRate: 10,
            minSize: 0.1,
            maxSize: 0.5,
        },
    },
    studioItems: {
        '1a-alignment': {
            id: '1a-alignment',
            identifier: '1a-alignment',
            type: 'ground',
            width: 6,
            height: 6,
            subdivisions: 2,
            updatable: false,
            boardId: 'alignment',
        },
    },
};

export const reducers = generateReducersForStore<IStudioStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.boards.setAll({}));
        store.dispatch(actions.buildings.setAll({}));
        store.dispatch(actions.assets.setAll({}));
        store.dispatch(actions.cameras.setAll({}));
        store.dispatch(actions.grounds.setAll({}));
        store.dispatch(actions.lights.setAll({}));
        store.dispatch(actions.particles.setAll({}));
        store.dispatch(actions.studioItems.setAll({}));
    });
};
