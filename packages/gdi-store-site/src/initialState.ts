import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { ISiteStore } from './types';

export const initialState: ISiteStore = {
    meta: {
        schemaVersion: '1.0.1',
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
        },
    },
    palette: {
        themeDarker: '#004578',
        themeDark: '#005a9e',
        themeDarkAlt: '#106ebe',
        themePrimary: '#0078d4',
        themeSecondary: '#2b88d8',
        themeTertiary: '#71afe5',
        themeLight: '#c7e0f4',
        themeLighter: '#deecf9',
        themeLighterAlt: '#eff6fc',
        black: '#000000',
        blackTranslucent40: 'rgba(0,0,0,.4)',
        neutralDark: '#201f1e',
        neutralPrimary: '#323130',
        neutralPrimaryAlt: '#3b3a39',
        neutralSecondary: '#605e5c',
        neutralSecondaryAlt: '#8a8886',
        neutralTertiary: '#a19f9d',
        neutralTertiaryAlt: '#c8c6c4',
        neutralQuaternary: '#d2d0ce',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralLight: '#edebe9',
        neutralLighter: '#f3f2f1',
        neutralLighterAlt: '#faf9f8',
        accent: '#0078d4',
        white: '#ffffff',
        whiteTranslucent40: 'rgba(255,255,255,.4)',
        yellowDark: '#d29200',
        yellow: '#ffb900',
        yellowLight: '#fff100',
        orange: '#d83b01',
        orangeLight: '#ea4300',
        orangeLighter: '#ff8c00',
        redDark: '#a4262c',
        red: '#e81123',
        magentaDark: '#5c005c',
        magenta: '#b4009e',
        magentaLight: '#e3008c',
        purpleDark: '#32145a',
        purple: '#5c2d91',
        purpleLight: '#b4a0ff',
        blueDark: '#002050',
        blueMid: '#00188f',
        blue: '#0078d4',
        blueLight: '#00bcf2',
        tealDark: '#004b50',
        teal: '#008272',
        tealLight: '#00b294',
        greenDark: '#004b1c',
        green: '#107c10',
        greenLight: '#bad80a',
    },
    fontSizes: {
        tiny: '10px',
        xSmall: '10px',
        small: '12px',
        smallPlus: '12px',
        medium: '14px',
        mediumPlus: '16px',
        icon: '16px',
        large: '18px',
        xLarge: '20px',
        xLargePlus: '24px',
        xxLarge: '28px',
        xxLargePlus: '32px',
        superLarge: '42px',
        mega: '68px',
    },
    spacing: {
        s1: '4px',
        s2: '8px',
        m: '16px',
        l1: '20px',
        l2: '32px',
    },
    fonts: {
        typographyId: 'inter',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 'regular',
    },
    instancesBlocks: {
        'home-placeholder-simple-1': {
            id: 'home-placeholder-simple-1',
            blockId: 'com.usegdi.templates.futuristic.placeholder-simple',
            pageId: 'home',
            order: 1,
        },
    },
    blocks: {
        'com.usegdi.templates.futuristic.placeholder-simple': {
            id: 'com.usegdi.templates.futuristic.placeholder-simple',
            name: 'placeholder-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.futuristic.placeholder-simple',
                schema: {
                    strings: {},
                    colors: {},
                    extra: {},
                },
            },
            sampleData: {},
            dimensions: {},
            screenshots: {},
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
    instancesMapColors: {},
    instancesMapStrings: {},
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
            extra_imageUrl: 'https://appofthebox.web.app/6.png',
        },
    },
    strings: {},
};

export const reducers = generateReducersForStore<ISiteStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.instancesBlocks.setAll({}));
        store.dispatch(actions.blocks.setAll({}));
        store.dispatch(actions.instancesProps.setAll({}));
        store.dispatch(actions.images.setAll({}));
    });
    return store;
};
