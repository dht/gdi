import { IMixerStore } from '../src/types';

export const state: IMixerStore = {
    meta: {
        schemaVersion: '1.0.1',
    },
    appStateMixer: {
        stateKey: 'mixer',
        mode: 'structure',
        selectedToolId: 'browse',
        paletteId: 'blue',
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
    currentIds: {
        pageId: 'home',
        selectedInstanceId: '',
        contentInstanceId: '',
        libraryInstanceId: '',
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
    libraryBlocks: {
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
    libraryTypography: {
        andadaPro: {
            id: 'andadaPro',
            title: 'Andada Pro',
            fontFamily: "'Andada Pro', serif",
            link: 'Andada+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800',
        },
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
        jetBrainsMono: {
            id: 'jetBrainsMono',
            title: 'JetBrains Mono',
            fontFamily: "'Hahmlet', serif",
            link: 'JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800',
        },
        manrope: {
            id: 'manrope',
            title: 'Manrope',
            fontFamily: "'Manrope', sans-serif",
            link: 'Manrope:wght@200;300;400;500;600;700;800',
        },
        lora: {
            id: 'lora',
            title: 'Lora',
            fontFamily: "'Lora', serif",
            link: 'Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700',
        },
        sora: {
            id: 'sora',
            title: 'Sora',
            fontFamily: "'Sora', sans-serif",
            link: 'Sora:wght@100;200;300;400;500;600;700;800',
        },
    },
    libraryPalettes: {
        blue: {
            id: 'blue',
            title: 'Blue',
            color1: '#1d3557',
            color2: '#457b9d',
            color3: '#a8dadc',
            color4: '#f1faee',
            color5: '#e63946',
        },
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
        '@gdi/store-business-base': '0.0.1',
    },
};
