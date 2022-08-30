import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { libraryBlocks } from './mock.libraryBlocks';
import { IMixerStore } from './types';

export const initialState: IMixerStore = {
    meta: {
        schemaVersion: '1.0.1',
    },
    appStateMixer: {
        stateKey: 'mixer',
        mode: 'visual',
        selectedToolId: 'data',
        paletteId: 'green',
        showImageUploadModal: false,
        showPlayModeMessage: false,
    },
    currentIds: {
        pageId: 'home',
        selectedInstanceId: '',
        contentInstanceId: '',
        libraryInstanceId: '',
        fieldId: '',
    },
    galleryState: {
        stateKey: 'galleryState',
        mode: 'full',
        selectedToolId: 'select',
        showTools: true,
        showTagModal: false,
        search: '',
        tag: 'background',
        selectedIds: [],
        favoriteIds: [],
        temporaryIds: [],
        deletedIds: [],
    },
    blocksGalleryState: {
        stateKey: 'blocksGalleryState',
        mode: 'minimal',
        filter: 'byType',
        search: '',
    },
    libraryImages: {
        '1': {
            id: '1',
            title: 'Debitis modi explicabo.',
            imageUrl: 'https://picsum.photos/seed/1/1593/948',
            imageThumbUrl:
                'https://picsum.photos/seed/1/200/119.02071563088512',
            tags: ['people', 'friend'],
            ratio: 1.6803797468354431,
        },
    },
    libraryBlocks: {
        'com.usegdi.templates.futuristic.sample-simple': {
            id: 'com.usegdi.templates.futuristic.sample-simple',
            name: 'hero-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.futuristic.sample-simple',
                schema: {
                    strings: {},
                    colors: {},
                    extra: {},
                },
            },
            sampleData: {},
            dimensions: {},
            screenshots: {},
            tags: ['type-sample'],
        },
        ...libraryBlocks,
    },
    libraryTypography: {
        inter: {
            id: 'inter',
            title: 'Inter',
            fontFamily: "'Inter', sans-serif",
            link: 'Inter:wght@100;200;300;400;500;600;700;800;900',
        },
    },
    libraryPalettes: {
        green: {
            id: 'green',
            title: 'Green',
            color1: '#22577a',
            color2: '#38a3a5',
            color3: '#57cc99',
            color4: '#80ed99',
            color5: '#c7f9cc',
        },
    },
    locales: {
        'en-us': {
            id: 'en-us',
            title: 'English (US)',
        },
    },
    packages: {
        '@gdi/template-gdi': '0.0.2',
        '@gdi/template-blog': '0.0.2',
        '@gdi/store-mixer': '0.0.1',
        '@gdi/store-site': '0.0.1',
    },
};

export const reducers = generateReducersForStore<IMixerStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.libraryBlocks.setAll({}));
        store.dispatch(actions.libraryImages.setAll({}));
        store.dispatch(actions.libraryPalettes.setAll({}));
        store.dispatch(actions.libraryTypography.setAll({}));
    });
    return store;
};
