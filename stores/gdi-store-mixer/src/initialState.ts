import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { IMixerStore } from './types';
import p from '../package.json';

export const initialState: IMixerStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateMixer: {
        stateKey: 'mixer',
        mode: 'gallery',
        selectedToolId: 'data',
        paletteId: 'green',
        showImageUploadModal: false,
        showPlayModeMessage: false,
        showMixerTree: false,
        mobileMode: false,
    },
    currentIds: {
        pageId: 'home',
        pageInstanceId: '',
        selectedInstanceId: '',
        contentInstanceId: '',
        libraryInstanceId: '',
        zoomWidgetId: '',
        fieldId: '',
        resolution: '2k',
    },
    libraryImages: {
        '1': {
            id: '1',
            title: 'Debitis modi explicabo.',
            imageUrl: 'https://picsum.photos/seed/1/1593/948',
            imageThumbUrl:
                'https://picsum.photos/seed/1/200/119.02071563088512',
            tags: ['people', 'friend'],
            dataTags: [],
            ratio: 1.6803797468354431,
        },
    },
    libraryWidgets: {
        'com.usegdi.templates.basic.sample-simple': {
            id: 'com.usegdi.templates.basic.sample-simple',
            name: 'hero-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.basic.sample-simple',
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
    libraryPages: {
        home: {
            id: 'home',
            title: 'Home',
            description: 'The home page',
            iconName: 'Home',
            order: 1,
            pageInstanceId: 'homeDraft1',
            path: '/',
            status: 'draft',
            tags: [],
            dataTags: [],
        },
    },
    libraryPageInstances: {
        homeDraft1: {
            id: 'homeDraft1',
            pageId: 'home',
            description: '',
            version: '1',
            order: 1,
            items: [
                {
                    id: 'j1',
                    date: '2020-10-10',
                    event: 'promoted',
                    notes: '',
                    authorId: '',
                },
            ],
        },
    },
    libraryInstances: {
        'home-placeholder-simple-1': {
            id: 'home-placeholder-simple-1',
            widgetId: 'com.usegdi.templates.basic.placeholder-simple',
            pageInstanceId: 'home',
            order: 1,
        },
    },
    libraryInstancesProps: {
        'home-placeholder-simple-1': {
            id: 'home-placeholder-simple-1',
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
            identifier: 'green',
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
        '@gdi/template-starter': '0.0.2',
        '@gdi/store-mixer': '0.0.1',
        '@gdi/store-site': '0.0.1',
    },
    libraryDatasets: {
        templates: {
            '1': {
                id: '1',
                title: 'Template #1',
            },
        },
    },
};

export const reducers = generateReducersForStore<IMixerStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.libraryWidgets.setAll({}));
        store.dispatch(actions.libraryImages.setAll({}));
        store.dispatch(actions.libraryPages.setAll({}));
        store.dispatch(actions.libraryPageInstances.setAll({}));
        store.dispatch(actions.libraryInstances.setAll({}));
        store.dispatch(actions.libraryInstancesProps.setAll({}));
        store.dispatch(actions.libraryPalettes.setAll({}));
        store.dispatch(actions.libraryTypography.setAll({}));
        store.dispatch(actions.libraryDatasets.setAll({}));
    });
    return store;
};
