import { ISiteStore } from '../src/types';

export const state: ISiteStore = {
    meta: {
        schemaVersion: '1.0.1',
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
        typographyId: 'Inter',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 'regular',
    },
    instances: {
        'home-userBar-simple-1': {
            id: 'home-userBar-simple-1',
            widgetId: 'com.usegdi.templates.gdi.userBar-simple',
            pageId: 'home',
            order: 1,
        },
        'home-hero-simple-1': {
            id: 'home-hero-simple-1',
            widgetId: 'com.usegdi.templates.gdi.hero-simple',
            pageId: 'home',
            order: 2,
        },
        'home-sectionHeader-simple-1': {
            id: 'home-sectionHeader-simple-1',
            widgetId: 'com.usegdi.templates.gdi.sectionHeader-simple',
            pageId: 'home',
            order: 3,
        },
        'home-installation-simple-1': {
            id: 'home-installation-simple-1',
            widgetId: 'com.usegdi.templates.gdi.installation-simple',
            pageId: 'home',
            order: 4,
        },
        'home-sectionHeader-simple-2': {
            id: 'home-sectionHeader-simple-2',
            widgetId: 'com.usegdi.templates.gdi.sectionHeader-simple',
            pageId: 'home',
            order: 5,
        },
        'home-feature-simple-1': {
            id: 'home-feature-simple-1',
            widgetId: 'com.usegdi.templates.gdi.feature-simple',
            pageId: 'home',
            order: 6,
        },
        'home-feature-simple-2': {
            id: 'home-feature-simple-2',
            widgetId: 'com.usegdi.templates.gdi.feature-simple',
            pageId: 'home',
            order: 7,
        },
        'home-feature-simple-3': {
            id: 'home-feature-simple-3',
            widgetId: 'com.usegdi.templates.gdi.feature-simple',
            pageId: 'home',
            order: 8,
        },
        'home-feature-simple-4': {
            id: 'home-feature-simple-4',
            widgetId: 'com.usegdi.templates.gdi.feature-simple',
            pageId: 'home',
            order: 9,
        },
        'home-lineCta-simple-1': {
            id: 'home-lineCta-simple-1',
            widgetId: 'com.usegdi.templates.gdi.lineCta-simple',
            pageId: 'home',
            order: 10,
        },
        'home-sectionHeader-simple-3': {
            id: 'home-sectionHeader-simple-3',
            widgetId: 'com.usegdi.templates.gdi.sectionHeader-simple',
            pageId: 'home',
            order: 11,
        },
        'home-imageAndText-simple-1': {
            id: 'home-imageAndText-simple-1',
            widgetId: 'com.usegdi.templates.gdi.imageAndText-simple',
            pageId: 'home',
            order: 12,
        },
        'home-footer-simple-1': {
            id: 'home-footer-simple-1',
            widgetId: 'com.usegdi.templates.gdi.footer-simple',
            pageId: 'home',
            order: 13,
        },
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
    locale: {
        localeId: 'en',
        isRtl: false,
    },
    blocks: {
        'com.usegdi.templates.gdi.feature-simple': {
            id: 'com.usegdi.templates.gdi.feature-simple',
            name: 'feature-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.feature-simple',
                schema: {
                    strings: {
                        slogan: {
                            fieldType: 'text',
                            order: 0,
                        },
                        header: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 1,
                        },
                        description: {
                            fieldType: 'longText',
                            order: 2,
                        },
                        ctaButtonText: {
                            fieldType: 'text',
                            order: 3,
                        },
                    },
                    colors: {
                        background: {
                            fieldType: 'color',
                            order: 0,
                        },
                        text: {
                            fieldType: 'color',
                            order: 1,
                        },
                    },
                    extra: {
                        href: {
                            fieldType: 'url',
                            isRequired: true,
                            order: 0,
                        },
                        imageUrl: {
                            fieldType: 'image',
                            isRequired: true,
                            order: 1,
                        },
                        animated: {
                            fieldType: 'checkbox',
                            order: 2,
                        },
                    },
                },
            },
            sampleData: {
                simple: {
                    id: 'simple',
                    strings: {
                        slogan: 'Move blocks around',
                        header: 'Structured',
                        description:
                            'Schema-based definition for all entities make page-structure manipulation easy and straight-forward //',
                    },
                    colors: {},
                    extra: {
                        href: '#',
                        imageUrl: 'https://appofthebox.web.app/s1.png',
                        animated: false,
                    },
                },
                blue: {
                    id: 'blue',
                    strings: {
                        slogan: 'Find new blocks',
                        header: 'Extendable',
                        description:
                            'Add new NPM packages which contain new blocks & templates. Easily switch between blocks to keep block data //',
                    },
                    colors: {},
                    extra: {
                        href: '#',
                        imageUrl: 'https://appofthebox.web.app/s2.png',
                        animated: false,
                    },
                },
            },
            dimensions: {
                simple: {
                    desktop: {
                        width: 1000,
                        height: 519,
                        ratio: 1.9267822736030829,
                    },
                    mobile: {
                        width: 500,
                        height: 197,
                        ratio: 2.5380710659898478,
                    },
                },
                blue: {
                    desktop: {
                        width: 1000,
                        height: 519,
                        ratio: 1.9267822736030829,
                    },
                    mobile: {
                        width: 500,
                        height: 367,
                        ratio: 1.3623978201634876,
                    },
                },
            },
            screenshots: {
                simple: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 519,
                            ratio: 1.9267822736030829,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.feature-simple.simple.desktop.large.webp?generation=1660831085438170&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 1000,
                            height: 519,
                            ratio: 1.9267822736030829,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.feature-simple.simple.desktop.thumb.webp?generation=1660831085437496&alt=media',
                            urlIsRemote: true,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 197,
                            ratio: 2.5380710659898478,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.feature-simple.simple.mobile.large.webp?generation=1660831085368613&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 500,
                            height: 197,
                            ratio: 2.5380710659898478,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.feature-simple.simple.mobile.thumb.webp?generation=1660831085415839&alt=media',
                            urlIsRemote: true,
                        },
                    },
                },
                blue: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 519,
                            ratio: 1.9267822736030829,
                        },
                        thumb: {
                            width: 1000,
                            height: 519,
                            ratio: 1.9267822736030829,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 367,
                            ratio: 1.3623978201634876,
                        },
                        thumb: {
                            width: 500,
                            height: 367,
                            ratio: 1.3623978201634876,
                        },
                    },
                },
            },
            tags: ['type-feature'],
        },
        'com.usegdi.templates.gdi.footer-simple': {
            id: 'com.usegdi.templates.gdi.footer-simple',
            name: 'footer-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.footer-simple',
                schema: {
                    strings: {
                        copyright: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 0,
                        },
                    },
                    colors: {},
                    extra: {},
                },
            },
            sampleData: {
                simple: {
                    id: 'simple',
                    strings: {
                        copyright: 'Copyright 2022 ©',
                    },
                    colors: {},
                    extra: {},
                },
            },
            dimensions: {
                simple: {
                    desktop: {
                        width: 1000,
                        height: 38,
                        ratio: 26.31578947368421,
                    },
                    mobile: {
                        width: 500,
                        height: 46,
                        ratio: 10.869565217391305,
                    },
                },
            },
            screenshots: {
                simple: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 38,
                            ratio: 26.31578947368421,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.footer-simple.simple.desktop.large.webp?generation=1660831085437714&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 1000,
                            height: 38,
                            ratio: 26.31578947368421,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.footer-simple.simple.desktop.thumb.webp?generation=1660831085433886&alt=media',
                            urlIsRemote: true,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 46,
                            ratio: 10.869565217391305,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.footer-simple.simple.mobile.large.webp?generation=1660831085418000&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 500,
                            height: 46,
                            ratio: 10.869565217391305,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.footer-simple.simple.mobile.thumb.webp?generation=1660831085453046&alt=media',
                            urlIsRemote: true,
                        },
                    },
                },
            },
            tags: ['type-footer'],
        },
        'com.usegdi.templates.gdi.hero-simple': {
            id: 'com.usegdi.templates.gdi.hero-simple',
            name: 'hero-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.hero-simple',
                schema: {
                    strings: {
                        slogan: {
                            fieldType: 'text',
                            order: 0,
                        },
                        header: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 1,
                        },
                        description: {
                            fieldType: 'longText',
                            order: 2,
                        },
                        ctaButtonText: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 3,
                        },
                        imageCreditsTitle: {
                            fieldType: 'text',
                            order: 4,
                        },
                        imageCreditsDescription: {
                            fieldType: 'text',
                            order: 5,
                        },
                    },
                    colors: {
                        background: {
                            fieldType: 'color',
                            order: 0,
                        },
                        text: {
                            fieldType: 'color',
                            order: 1,
                        },
                    },
                    extra: {
                        href: {
                            fieldType: 'url',
                            isRequired: true,
                            order: 0,
                        },
                        imageUrl: {
                            fieldType: 'image',
                            isRequired: true,
                            order: 1,
                        },
                        hrefSecond: {
                            fieldType: 'url',
                            order: 2,
                        },
                        headerFontSize: {
                            fieldType: 'number',
                            isRequired: true,
                            order: 3,
                        },
                    },
                },
            },
            sampleData: {
                simple: {
                    id: 'simple',
                    strings: {
                        ctaButtonText: 'Get Started',
                        secondButtonText: 'Github',
                        header: 'gDI',
                        description:
                            'An open-source & extendable content management system (CMS) written in ReactJS, hosted on Firebase //',
                        imageCreditsTitle: 'MidJourney AI-generated image',
                        imageCreditsDescription:
                            'futuristic phone concept neon colorful abstract --ar 3:2',
                    },
                    colors: {
                        text: '#fff',
                    },
                    extra: {
                        href: 'https://github.com/dht/gdi/docs',
                        hrefSecond: 'https://github.com/dht/gdi',
                        imageUrl: 'https://appofthebox.web.app/6.png',
                        headerFontSize: 70,
                    },
                },
                blue: {
                    id: 'blue',
                    strings: {
                        ctaButtonText: 'Join',
                        secondButtonText: 'Pricing',
                        header: 'SuperCharger',
                        description: '',
                    },
                    colors: {
                        text: '#fff',
                    },
                    extra: {
                        href: 'https://github.com/dht/gdi/docs',
                        hrefSecond: 'https://github.com/dht/gdi',
                        imageUrl: 'https://appofthebox.web.app/7.png',
                        headerFontSize: 70,
                    },
                },
            },
            dimensions: {
                simple: {
                    desktop: {
                        width: 1000,
                        height: 666,
                        ratio: 1.5015015015015014,
                    },
                    mobile: {
                        width: 500,
                        height: 200,
                        ratio: 2.5,
                    },
                },
                blue: {
                    desktop: {
                        width: 1000,
                        height: 666,
                        ratio: 1.5015015015015014,
                    },
                    mobile: {
                        width: 500,
                        height: 150,
                        ratio: 3.3333333333333335,
                    },
                },
            },
            screenshots: {
                simple: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 666,
                            ratio: 1.5015015015015014,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.hero-simple.simple.desktop.large.webp?generation=1660831085446030&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 1000,
                            height: 666,
                            ratio: 1.5015015015015014,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.hero-simple.simple.desktop.thumb.webp?generation=1660831085449671&alt=media',
                            urlIsRemote: true,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 200,
                            ratio: 2.5,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.hero-simple.simple.mobile.large.webp?generation=1660831085460036&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 500,
                            height: 200,
                            ratio: 2.5,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.hero-simple.simple.mobile.thumb.webp?generation=1660831085455984&alt=media',
                            urlIsRemote: true,
                        },
                    },
                },
                blue: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 666,
                            ratio: 1.5015015015015014,
                        },
                        thumb: {
                            width: 1000,
                            height: 666,
                            ratio: 1.5015015015015014,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 150,
                            ratio: 3.3333333333333335,
                        },
                        thumb: {
                            width: 500,
                            height: 150,
                            ratio: 3.3333333333333335,
                        },
                    },
                },
            },
            tags: ['type-hero'],
        },
        'com.usegdi.templates.gdi.imageAndText-simple': {
            id: 'com.usegdi.templates.gdi.imageAndText-simple',
            name: 'imageAndText-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.imageAndText-simple',
                schema: {
                    strings: {
                        slogan: {
                            fieldType: 'text',
                            order: 0,
                        },
                        header: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 1,
                        },
                        description: {
                            fieldType: 'longText',
                            order: 2,
                        },
                        ctaButtonText: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 3,
                        },
                    },
                    colors: {
                        background: {
                            fieldType: 'color',
                            order: 0,
                        },
                        text: {
                            fieldType: 'color',
                            order: 1,
                        },
                    },
                    extra: {
                        href: {
                            fieldType: 'url',
                            isRequired: true,
                            order: 0,
                        },
                        imageUrl: {
                            fieldType: 'image',
                            order: 1,
                        },
                        backgroundImage: {
                            fieldType: 'image',
                            order: 2,
                        },
                    },
                },
            },
            sampleData: {
                simple: {
                    id: 'simple',
                    strings: {
                        slogan: 'community',
                        ctaButtonText: 'How to join?',
                        header: 'People who joined recently',
                        description:
                            'With morning you are an effective team that gets things done, every minute, every hour, every day',
                    },
                    colors: {},
                    extra: {
                        href: 'https://github.com/dht/gdi',
                        backgroundImageUrl: 'https://appofthebox.web.app/1.png',
                    },
                },
            },
            dimensions: {
                simple: {
                    desktop: {
                        width: 1000,
                        height: 564,
                        ratio: 1.7730496453900708,
                    },
                    mobile: {
                        width: 500,
                        height: 219,
                        ratio: 2.2831050228310503,
                    },
                },
            },
            screenshots: {
                simple: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 564,
                            ratio: 1.7730496453900708,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.imageAndText-simple.simple.desktop.large.webp?generation=1660831085522118&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 1000,
                            height: 564,
                            ratio: 1.7730496453900708,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.imageAndText-simple.simple.desktop.thumb.webp?generation=1660831085411636&alt=media',
                            urlIsRemote: true,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 219,
                            ratio: 2.2831050228310503,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.imageAndText-simple.simple.mobile.large.webp?generation=1660831085430806&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 500,
                            height: 219,
                            ratio: 2.2831050228310503,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.imageAndText-simple.simple.mobile.thumb.webp?generation=1660831085448029&alt=media',
                            urlIsRemote: true,
                        },
                    },
                },
            },
            tags: ['type-imageAndText'],
        },
        'com.usegdi.templates.gdi.installation-simple': {
            id: 'com.usegdi.templates.gdi.installation-simple',
            name: 'installation-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.installation-simple',
                schema: {
                    strings: {
                        command: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 0,
                        },
                        nextStage: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 1,
                        },
                        nextStageLink: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 2,
                        },
                    },
                    colors: {
                        background: {
                            fieldType: 'color',
                            order: 0,
                        },
                        text: {
                            fieldType: 'color',
                            order: 1,
                        },
                    },
                    extra: {
                        hrefNextStage: {
                            fieldType: 'url',
                            isRequired: true,
                            order: 0,
                        },
                    },
                },
            },
            sampleData: {
                simple: {
                    id: 'simple',
                    strings: {
                        command: 'npm install -g @gdi/cli',
                        nextStage: 'After which follow the ',
                        nextStageLink: 'Getting Started Guide',
                    },
                    colors: {
                        text: '#fff',
                    },
                    extra: {
                        hrefNextStage: 'https://github.com/dht/gdi',
                    },
                },
            },
            dimensions: {
                simple: {
                    desktop: {
                        width: 1000,
                        height: 390,
                        ratio: 2.5641025641025643,
                    },
                    mobile: {
                        width: 500,
                        height: 123,
                        ratio: 4.065040650406504,
                    },
                },
            },
            screenshots: {
                simple: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 390,
                            ratio: 2.5641025641025643,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.installation-simple.simple.desktop.large.webp?generation=1660831085430621&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 1000,
                            height: 390,
                            ratio: 2.5641025641025643,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.installation-simple.simple.desktop.thumb.webp?generation=1660831085430800&alt=media',
                            urlIsRemote: true,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 123,
                            ratio: 4.065040650406504,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.installation-simple.simple.mobile.large.webp?generation=1660831085425302&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 500,
                            height: 123,
                            ratio: 4.065040650406504,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.installation-simple.simple.mobile.thumb.webp?generation=1660831085456044&alt=media',
                            urlIsRemote: true,
                        },
                    },
                },
            },
            tags: ['type-installation'],
        },
        'com.usegdi.templates.gdi.lineCta-simple': {
            id: 'com.usegdi.templates.gdi.lineCta-simple',
            name: 'lineCta-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.lineCta-simple',
                schema: {
                    strings: {
                        textStrong: {
                            fieldType: 'text',
                            order: 0,
                        },
                        text: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 1,
                        },
                        ctaButtonText: {
                            fieldType: 'text',
                            isRequired: true,
                            order: 2,
                        },
                    },
                    colors: {
                        background: {
                            fieldType: 'color',
                            order: 0,
                        },
                        text: {
                            fieldType: 'color',
                            order: 1,
                        },
                    },
                    extra: {
                        href: {
                            fieldType: 'url',
                            isRequired: true,
                            order: 0,
                        },
                    },
                },
            },
            sampleData: {
                simple: {
                    id: 'simple',
                    strings: {
                        textStrong: 'Unleash',
                        text: 'the power of Firebase ©',
                        ctaButtonText: 'Visit Github',
                    },
                    colors: {},
                    extra: {
                        href: 'https://github.com/dht/gdi',
                    },
                },
            },
            dimensions: {
                simple: {
                    desktop: {
                        width: 1000,
                        height: 260,
                        ratio: 3.8461538461538463,
                    },
                    mobile: {
                        width: 500,
                        height: 110,
                        ratio: 4.545454545454546,
                    },
                },
            },
            screenshots: {
                simple: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 260,
                            ratio: 3.8461538461538463,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.lineCta-simple.simple.desktop.large.webp?generation=1660831085448699&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 1000,
                            height: 260,
                            ratio: 3.8461538461538463,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.lineCta-simple.simple.desktop.thumb.webp?generation=1660831085450259&alt=media',
                            urlIsRemote: true,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 110,
                            ratio: 4.545454545454546,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.lineCta-simple.simple.mobile.large.webp?generation=1660831085358978&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 500,
                            height: 110,
                            ratio: 4.545454545454546,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.lineCta-simple.simple.mobile.thumb.webp?generation=1660831085408265&alt=media',
                            urlIsRemote: true,
                        },
                    },
                },
            },
            tags: ['type-lineCta'],
        },
        'com.usegdi.templates.gdi.sectionHeader-simple': {
            id: 'com.usegdi.templates.gdi.sectionHeader-simple',
            name: 'sectionHeader-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.sectionHeader-simple',
                schema: {
                    strings: {
                        text: {
                            fieldType: 'text',
                            order: 0,
                        },
                    },
                    colors: {},
                    extra: {
                        id: {
                            fieldType: 'text',
                            order: 0,
                        },
                        isHidden: {
                            fieldType: 'checkbox',
                            order: 1,
                        },
                    },
                },
            },
            sampleData: {
                simple: {
                    id: 'simple',
                    strings: {
                        text: 'Features',
                    },
                    colors: {},
                    extra: {
                        id: 'features',
                    },
                },
            },
            dimensions: {
                simple: {
                    desktop: {
                        width: 1000,
                        height: 66,
                        ratio: 15.151515151515152,
                    },
                    mobile: {
                        width: 500,
                        height: 90,
                        ratio: 5.555555555555555,
                    },
                },
            },
            screenshots: {
                simple: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 66,
                            ratio: 15.151515151515152,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.sectionHeader-simple.simple.desktop.large.webp?generation=1660831085531198&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 1000,
                            height: 66,
                            ratio: 15.151515151515152,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.sectionHeader-simple.simple.desktop.thumb.webp?generation=1660831085416518&alt=media',
                            urlIsRemote: true,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 90,
                            ratio: 5.555555555555555,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.sectionHeader-simple.simple.mobile.large.webp?generation=1660831085468972&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 500,
                            height: 90,
                            ratio: 5.555555555555555,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.sectionHeader-simple.simple.mobile.thumb.webp?generation=1660831085554962&alt=media',
                            urlIsRemote: true,
                        },
                    },
                },
            },
            tags: ['type-sectionHeader'],
        },
        'com.usegdi.templates.gdi.userBar-simple': {
            id: 'com.usegdi.templates.gdi.userBar-simple',
            name: 'userBar-simple',
            description: '',
            params: {
                id: 'com.usegdi.templates.gdi.userBar-simple',
                schema: {
                    strings: {},
                    colors: {
                        background: {
                            fieldType: 'color',
                            order: 0,
                        },
                    },
                    extra: {
                        logoImageUrl: {
                            fieldType: 'url',
                            isRequired: true,
                            order: 0,
                        },
                        githubLink: {
                            fieldType: 'url',
                            isRequired: true,
                            order: 1,
                        },
                    },
                },
            },
            sampleData: {
                simple: {
                    id: 'simple',
                    strings: {},
                    colors: {
                        backgroundColor: 'white',
                    },
                    extra: {
                        logoImageUrl: '',
                        githubLink: 'https://github.com/dht/gdi',
                        items: [
                            {
                                href: '#installation',
                                title: 'Installation',
                            },
                            {
                                href: '#features',
                                title: 'Features',
                            },
                            {
                                href: '#community',
                                title: 'Community',
                            },
                        ],
                    },
                },
            },
            dimensions: {
                simple: {
                    desktop: {
                        width: 1000,
                        height: 66,
                        ratio: 15.151515151515152,
                    },
                    mobile: {
                        width: 500,
                        height: 35,
                        ratio: 14.285714285714286,
                    },
                },
            },
            screenshots: {
                simple: {
                    desktop: {
                        large: {
                            width: 1000,
                            height: 66,
                            ratio: 15.151515151515152,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.userBar-simple.simple.desktop.large.webp?generation=1660831085431833&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 1000,
                            height: 66,
                            ratio: 15.151515151515152,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.userBar-simple.simple.desktop.thumb.webp?generation=1660831085450078&alt=media',
                            urlIsRemote: true,
                        },
                    },
                    mobile: {
                        large: {
                            width: 500,
                            height: 35,
                            ratio: 14.285714285714286,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.userBar-simple.simple.mobile.large.webp?generation=1660831085408977&alt=media',
                            urlIsRemote: true,
                        },
                        thumb: {
                            width: 500,
                            height: 35,
                            ratio: 14.285714285714286,
                            url: 'https://storage.googleapis.com/download/storage/v1/b/amazing-de4d0.appspot.com/o/screenshot.gdi.userBar-simple.simple.mobile.thumb.webp?generation=1660831085386820&alt=media',
                            urlIsRemote: true,
                        },
                    },
                },
            },
            tags: ['type-userBar'],
        },
    },
    instancesMapColors: {},
    instancesMapStrings: {},
    instancesProps: {
        'home-hero-simple-1': {
            id: 'home-hero-simple-1',
            strings_header: 'gDI',
            strings_description:
                'An open-source & extendable content management system (CMS) written in ReactJS, hosted on Firebase //',
            strings_ctaButtonText: 'Get Started',
            strings_secondButtonText: 'Github',
            strings_imageCreditsTitle: 'MidJourney AI-generated image',
            strings_imageCreditsDescription:
                'futuristic phone concept neon colorful abstract --ar 3:2',
            colors_text: 'white',
            extra_href: 'https://github.com/dht/gdi/docs',
            extra_hrefSecond: 'https://github.com/dht/gdi/docs',
            extra_headerFontSize: 70,
            extra_imageUrl: 'https://appofthebox.web.app/6.png',
        },
        'home-userBar-simple-1': {
            id: 'home-userBar-simple-1',
            extra_logoImageUrl: '',
            extra_githubLink: 'https://github.com/dht/gdi',
            extra_items: [
                {
                    href: '#installation',
                    title: 'Installation',
                },
                {
                    href: '#features',
                    title: 'Features',
                },
                {
                    href: '#community',
                    title: 'Community',
                },
            ],
        },

        'home-sectionHeader-simple-1': {
            id: 'home-sectionHeader-simple-1',
            strings_text: 'Installation',
            extra_id: 'installation',
            extra_isHidden: true,
        },
        'home-installation-simple-1': {
            id: 'home-installation-simple-1',
            strings_command: 'npm install -g @gdi/cli',
            strings_nextStage: 'After which follow the ',
            strings_nextStageLink: 'Getting Started Guide',
            colors_text: '#fff',
            extra_hrefNextStage: 'https://github.com/dht/gdi',
        },
        'home-sectionHeader-simple-2': {
            id: 'home-sectionHeader-simple-2',
            strings_text: 'Features',
            extra_id: 'features',
            extra_isHidden: true,
        },
        'home-feature-simple-1': {
            id: 'home-feature-simple-1',
            strings_slogan: 'Move blocks around',
            strings_header: 'Structured',
            strings_description:
                'Schema-based definition for all entities make page-structure manipulation easy and straight-forward //',
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s1.png',
            extra_animated: true,
        },
        'home-feature-simple-2': {
            id: 'home-feature-simple-2',
            strings_slogan: 'Find new blocks',
            strings_header: 'Extendable',
            strings_description:
                'Add new NPM packages which contain new blocks & templates. Easily switch between blocks to keep block data //',
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s2.png',
            extra_animated: true,
        },
        'home-feature-simple-3': {
            id: 'home-feature-simple-3',
            strings_slogan: 'Admin permissions',
            strings_header: 'Manageable',
            strings_description:
                "With a form-based admin-panel you can allow non-techies to edit the page's content //",
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s3.png',
            extra_animated: true,
        },
        'home-feature-simple-4': {
            id: 'home-feature-simple-4',
            strings_slogan: 'See preview',
            strings_header: 'Visual',
            strings_description:
                'Use the preview to see the current page structure & design, change typography, color palettes and content //',
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s4.png',
            extra_animated: true,
        },
        'home-lineCta-simple-1': {
            id: 'home-lineCta-simple-1',
            strings_textStrong: 'Unleash',
            strings_text: 'the power of Firebase ©',
            strings_ctaButtonText: 'Visit Github',
            extra_href: 'https://github.com/dht/gdi',
            extra_imageUrl: 'https://appofthebox.web.app/6.png',
        },
        'home-sectionHeader-simple-3': {
            id: 'home-sectionHeader-simple-3',
            strings_text: 'Community',
            extra_id: 'community',
            extra_isHidden: true,
        },
        'home-imageAndText-simple-1': {
            id: 'home-imageAndText-simple-1',
            strings_slogan: 'community',
            strings_ctaButtonText: 'How to join?',
            strings_header: 'People who joined recently',
            strings_description:
                'Start adding your own templates and blocks, contribute your thoughts and ideas, join the discussion //',
            extra_href: 'https://github.com/dht/gdi',
            extra_backgroundImageUrl: 'https://appofthebox.web.app/1.png',
        },
        'home-footer-simple-1': {
            id: 'home-footer-simple-1',
            strings_copyright: 'Copyright 2022 ©',
        },
    },
    strings: {},
};
