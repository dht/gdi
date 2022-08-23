import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { images } from './data.images';
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
    },
    currentIds: {
        pageId: 'home',
        selectedInstanceId: '',
        contentInstanceId: '',
        libraryInstanceId: '',
    },
    galleryState: {
        stateKey: 'galleryState',
        mode: 'full',
        selectedToolId: 'select',
        showTools: true,
        showUploadModal: false,
        showTagModal: false,
        search: '',
        tag: 'background',
        selectedIds: [],
        favoriteIds: [],
        temporaryIds: [],
        deletedIds: [],
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
        ...images,
    },
    libraryBlocks: {
        'com.usegdi.templates.gdi.sample-simple': {
            id: 'com.usegdi.templates.gdi.sample-simple',
            name: 'hero-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.sample-simple',
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
        en: {
            id: 'en',
            title: 'English',
        },
    },
    packages: {
        '@gdi/template-gdi': '0.0.2',
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
