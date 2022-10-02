import { IMixerStore } from '../src/types';
import { libraryWidgets } from '../src/mock.libraryWidgets';
import { libraryImages } from './data.images';

export const state: IMixerStore = {
    meta: {
        schemaVersion: '1.0.1',
    },
    appStateMixer: {
        stateKey: 'mixer',
        mode: 'structure',
        selectedToolId: 'browse',
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
    pages: {
        home: {
            id: 'home',
            title: 'Home',
            description: 'The home page',
            iconName: 'Home',
            order: 1,
        },
    },
    libraryWidgets: libraryWidgets as any,
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
        ...libraryImages,
    },
    libraryTypography: {
        encodeSans: {
            id: 'encodeSans',
            title: 'EncodeSans',
            fontFamily: "'Encode Sans', sans-serif",
            link: 'Encode+Sans:wght@100;200;300;400;500;600;700;800;900',
        },
        epilogue: {
            id: 'epilogue',
            title: 'Epilogue',
            fontFamily: "'Epilogue', sans-serif",
            link: 'Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
        },
        hamlet: {
            id: 'hamlet',
            title: 'Hamlet',
            fontFamily: "'Hahmlet', serif",
            link: 'Hahmlet:wght@100;200;300;400;500;600;700;800;900',
        },
        inter: {
            id: 'inter',
            title: 'Inter',
            fontFamily: "'Inter', sans-serif",
            link: 'Inter:wght@100;200;300;400;500;600;700;800;900',
        },
        manrope: {
            id: 'manrope',
            title: 'Manrope',
            fontFamily: "'Manrope', sans-serif",
            link: 'Manrope:wght@200;300;400;500;600;700;800',
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
        '@gdi/template-basic': '0.0.2',
        '@gdi/template-minimalist': '0.0.2',
        '@gdi/template-blog': '0.0.2',
        '@gdi/store-mixer': '0.0.1',
        '@gdi/store-site': '0.0.1',
    },
};
