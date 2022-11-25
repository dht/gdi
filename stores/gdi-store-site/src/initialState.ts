import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { ISiteStore } from './types';
import p from '../package.json';

export const initialState: ISiteStore = {
    meta: {
        identifier: 'site',
        schemaVersion: '1.0.1',
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    locale: {
        localeId: 'en-us',
        isRtl: false,
    },
    pages: {
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
    pageInstances: {
        homeDraft1: {
            id: 'homeDraft1',
            description: '',
            pageId: '',
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
    palette: {
        identifier: 'green',
        title: 'Green',
        color1: '#22577a',
        color2: '#38a3a5',
        color3: '#57cc99',
        color4: '#80ed99',
        color5: '#c7f9cc',
    },
    fonts: {
        typographyId: 'inter',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 'regular',
    },
    breakpoints: {
        mobile: {
            id: 'mobile',
            screenWidth: 375,
            screenHeight: 720,
            minWidth: 0,
            maxWidth: 600,
            containerWidth: 0,
            order: 0,
        },
        tablet: {
            id: 'tablet',
            screenWidth: 720,
            screenHeight: 1280,
            minWidth: 600,
            maxWidth: 1100,
            containerWidth: 720,
            order: 1,
        },
        '720p': {
            id: '720p',
            screenWidth: 1280,
            screenHeight: 720,
            minWidth: 1100,
            maxWidth: 1300,
            containerWidth: 1024,
            order: 2,
        },
        HD: {
            id: 'HD',
            screenWidth: 1360,
            screenHeight: 760,
            minWidth: 1300,
            maxWidth: 1440,
            containerWidth: 1280,
            order: 3,
        },
        'HD+': {
            id: 'HD+',
            screenWidth: 1600,
            screenHeight: 900,
            minWidth: 1440,
            maxWidth: 1700,
            containerWidth: 1360,
            order: 4,
        },
        '1080p': {
            id: '1080p',
            screenWidth: 1920,
            screenHeight: 1080,
            minWidth: 1700,
            maxWidth: 2000,
            containerWidth: 1600,
            isDefault: true,
            order: 5,
        },
        '2k': {
            id: '2k',
            screenWidth: 2560,
            screenHeight: 1440,
            minWidth: 2000,
            maxWidth: 2600,
            containerWidth: 1920,
            order: 6,
        },
        '4k': {
            id: '4k',
            screenWidth: 3840,
            screenHeight: 2160,
            minWidth: 2600,
            containerWidth: 2560,
            order: 7,
        },
    },
    instances: {
        'home-placeholder-simple-1': {
            id: 'home-placeholder-simple-1',
            widgetId: 'com.usegdi.templates.basic.placeholder-simple',
            pageInstanceId: 'home',
            order: 1,
        },
    },
    widgets: {
        'com.usegdi.templates.basic.placeholder-simple': {
            id: 'com.usegdi.templates.basic.placeholder-simple',
            name: 'placeholder-simple',
            description: '',
            tags: ['type-placeholder'],
        },
    },
    images: {
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
    instancesProps: {
        'home-placeholder-simple-1': {
            id: 'home-placeholder-simple-1',
            strings_header: 'gDI',
            strings_description:
                'An open-source & extendable content management system (CMS) written in ReactJS, hosted on Firebase //',
            strings_ctaButtonText: 'Get Started',
            strings_secondButtonText: 'Github',
            colors_text: 'white',
            extra_href: 'https://github.com/dht/gdi/docs',
            extra_hrefSecond: 'https://github.com/dht/gdi/docs',
            extra_headerFontSize: 70,
            extra_imageUrl: 'https://appofthebox.web.app/6.webp',
        },
    },
    siteProperties: {
        title: '',
        metaTags: [],
        linkTags: [],
    },
    datasets: {
        templates: {
            '1': {
                id: '1',
                title: 'Template #1',
            },
        },
    },
};

export const reducers = generateReducersForStore<ISiteStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.pages.setAll({}));
        store.dispatch(actions.pageInstances.setAll({}));
        store.dispatch(actions.instances.setAll({}));
        store.dispatch(actions.widgets.setAll({}));
        store.dispatch(actions.instancesProps.setAll({}));
        store.dispatch(actions.images.setAll({}));
        store.dispatch(actions.datasets.setAll({}));
    });
    return store;
};
