export const libraryWidgets: IWidgets = {
    'com.usegdi.templates.basic.feature-simple': {
        id: 'com.usegdi.templates.basic.feature-simple',
        name: 'feature-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.basic.feature-simple',
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
                    imageUrl: 'https://appofthebox.web.app/s1.webp',
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
                    imageUrl: 'https://appofthebox.web.app/s2.webp',
                    animated: false,
                },
            },
        },
        dimensions: {
            simple: {
                desktop: {
                    width: 1000,
                    height: 520,
                    ratio: 1.9230769230769231,
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
                    height: 520,
                    ratio: 1.9230769230769231,
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
                        height: 520,
                        ratio: 1.9230769230769231,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.feature-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 520,
                        ratio: 1.9230769230769231,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.feature-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 197,
                        ratio: 2.5380710659898478,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.feature-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 197,
                        ratio: 2.5380710659898478,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.feature-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 520,
                        ratio: 1.9230769230769231,
                    },
                    thumb: {
                        width: 1000,
                        height: 520,
                        ratio: 1.9230769230769231,
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
    'com.usegdi.templates.basic.footer-simple': {
        id: 'com.usegdi.templates.basic.footer-simple',
        name: 'footer-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.basic.footer-simple',
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
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.footer-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 38,
                        ratio: 26.31578947368421,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.footer-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 46,
                        ratio: 10.869565217391305,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.footer-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 46,
                        ratio: 10.869565217391305,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.footer-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-footer'],
    },
    'com.usegdi.templates.basic.hero-simple': {
        id: 'com.usegdi.templates.basic.hero-simple',
        name: 'hero-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.basic.hero-simple',
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
                    showBeta: {
                        fieldType: 'checkbox',
                        order: 4,
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
                    imageUrl: 'https://appofthebox.web.app/6.webp',
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
                    imageUrl: 'https://appofthebox.web.app/7.webp',
                    headerFontSize: 70,
                },
            },
        },
        dimensions: {
            simple: {
                desktop: {
                    width: 1000,
                    height: 749,
                    ratio: 1.335113484646195,
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
                    height: 749,
                    ratio: 1.335113484646195,
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
                        height: 749,
                        ratio: 1.335113484646195,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.hero-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 749,
                        ratio: 1.335113484646195,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.hero-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 200,
                        ratio: 2.5,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.hero-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 200,
                        ratio: 2.5,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.hero-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 749,
                        ratio: 1.335113484646195,
                    },
                    thumb: {
                        width: 1000,
                        height: 749,
                        ratio: 1.335113484646195,
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
    'com.usegdi.templates.basic.imageAndText-simple': {
        id: 'com.usegdi.templates.basic.imageAndText-simple',
        name: 'imageAndText-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.basic.imageAndText-simple',
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
                    backgroundImageUrl: {
                        fieldType: 'image',
                        order: 1,
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
                    backgroundImageUrl: 'https://appofthebox.web.app/1.webp',
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
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.imageAndText-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 564,
                        ratio: 1.7730496453900708,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.imageAndText-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 219,
                        ratio: 2.2831050228310503,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.imageAndText-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 219,
                        ratio: 2.2831050228310503,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.imageAndText-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-imageAndText'],
    },
    'com.usegdi.templates.basic.installation-simple': {
        id: 'com.usegdi.templates.basic.installation-simple',
        name: 'installation-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.basic.installation-simple',
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
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.installation-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 390,
                        ratio: 2.5641025641025643,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.installation-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 123,
                        ratio: 4.065040650406504,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.installation-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 123,
                        ratio: 4.065040650406504,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.installation-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-installation'],
    },
    'com.usegdi.templates.basic.lineCta-simple': {
        id: 'com.usegdi.templates.basic.lineCta-simple',
        name: 'lineCta-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.basic.lineCta-simple',
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
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.lineCta-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 260,
                        ratio: 3.8461538461538463,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.lineCta-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 110,
                        ratio: 4.545454545454546,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.lineCta-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 110,
                        ratio: 4.545454545454546,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.lineCta-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-lineCta'],
    },
    'com.usegdi.templates.basic.sectionHeader-simple': {
        id: 'com.usegdi.templates.basic.sectionHeader-simple',
        name: 'sectionHeader-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.basic.sectionHeader-simple',
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
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.sectionHeader-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 66,
                        ratio: 15.151515151515152,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.sectionHeader-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 90,
                        ratio: 5.555555555555555,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.sectionHeader-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 90,
                        ratio: 5.555555555555555,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.sectionHeader-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-sectionHeader'],
    },
    'com.usegdi.templates.basic.userBar-simple': {
        id: 'com.usegdi.templates.basic.userBar-simple',
        name: 'userBar-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.basic.userBar-simple',
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
                        height: 66,
                        ratio: 15.151515151515152,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.userBar-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 66,
                        ratio: 15.151515151515152,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.userBar-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 123,
                        ratio: 4.065040650406504,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.userBar-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 123,
                        ratio: 4.065040650406504,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.basic.userBar-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-userBar'],
    },
    'com.usegdi.templates.minimalist.feature-simple': {
        id: 'com.usegdi.templates.minimalist.feature-simple',
        name: 'feature-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.minimalist.feature-simple',
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
                    imageUrl: 'https://appofthebox.web.app/s1.webp',
                    animated: false,
                },
            },
        },
        dimensions: {
            simple: {
                desktop: {
                    width: 1000,
                    height: 520,
                    ratio: 1.9230769230769231,
                },
                mobile: {
                    width: 500,
                    height: 197,
                    ratio: 2.5380710659898478,
                },
            },
        },
        screenshots: {
            simple: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 520,
                        ratio: 1.9230769230769231,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.feature-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 520,
                        ratio: 1.9230769230769231,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.feature-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 197,
                        ratio: 2.5380710659898478,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.feature-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 197,
                        ratio: 2.5380710659898478,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.feature-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-feature'],
    },
    'com.usegdi.templates.minimalist.footer-simple': {
        id: 'com.usegdi.templates.minimalist.footer-simple',
        name: 'footer-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.minimalist.footer-simple',
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
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.footer-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 38,
                        ratio: 26.31578947368421,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.footer-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 46,
                        ratio: 10.869565217391305,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.footer-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 46,
                        ratio: 10.869565217391305,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.footer-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-footer'],
    },
    'com.usegdi.templates.minimalist.hero-simple': {
        id: 'com.usegdi.templates.minimalist.hero-simple',
        name: 'hero-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.minimalist.hero-simple',
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
                    showBeta: {
                        fieldType: 'checkbox',
                        order: 4,
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
                        'white minimalist background --ar 3:2',
                },
                colors: {
                    text: '#fff',
                },
                extra: {
                    href: 'https://github.com/dht/gdi/docs',
                    hrefSecond: 'https://github.com/dht/gdi',
                    imageUrl: 'https://appofthebox.web.app/white_bk.webp',
                    headerFontSize: 70,
                },
            },
        },
        dimensions: {
            simple: {
                desktop: {
                    width: 1000,
                    height: 749,
                    ratio: 1.335113484646195,
                },
                mobile: {
                    width: 500,
                    height: 270,
                    ratio: 1.8518518518518519,
                },
            },
        },
        screenshots: {
            simple: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 749,
                        ratio: 1.335113484646195,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.hero-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 749,
                        ratio: 1.335113484646195,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.hero-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 270,
                        ratio: 1.8518518518518519,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.hero-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 270,
                        ratio: 1.8518518518518519,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.hero-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-hero'],
    },
    'com.usegdi.templates.minimalist.imageAndText-simple': {
        id: 'com.usegdi.templates.minimalist.imageAndText-simple',
        name: 'imageAndText-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.minimalist.imageAndText-simple',
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
                    backgroundImageUrl: {
                        fieldType: 'image',
                        order: 1,
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
                    backgroundImageUrl:
                        'https://appofthebox.web.app/gray_bk.webp',
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
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.imageAndText-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 564,
                        ratio: 1.7730496453900708,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.imageAndText-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 219,
                        ratio: 2.2831050228310503,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.imageAndText-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 219,
                        ratio: 2.2831050228310503,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.minimalist.imageAndText-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-imageAndText'],
    },
    'com.usegdi.templates.blog.hero-simple': {
        id: 'com.usegdi.templates.blog.hero-simple',
        name: 'hero-simple',
        description: '',
        params: {
            id: 'com.usegdi.templates.blog.hero-simple',
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
                    showBeta: {
                        fieldType: 'checkbox',
                        order: 4,
                    },
                },
            },
        },
        sampleData: {
            simple: {
                id: 'simple',
                strings: {
                    header: 'The Blog',
                    imageCreditsTitle: 'MidJourney AI-generated image',
                    imageCreditsDescription: 'neon lights triangle --ar 6:2',
                },
                colors: {
                    text: '#fff',
                },
                extra: {
                    imageUrl: 'https://appofthebox.web.app/neon.webp',
                    headerFontSize: 120,
                },
            },
        },
        dimensions: {
            simple: {
                desktop: {
                    width: 1000,
                    height: 250,
                    ratio: 4,
                },
                mobile: {
                    width: 500,
                    height: 92,
                    ratio: 5.434782608695652,
                },
            },
        },
        screenshots: {
            simple: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 250,
                        ratio: 4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 250,
                        ratio: 4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 92,
                        ratio: 5.434782608695652,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 92,
                        ratio: 5.434782608695652,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-hero'],
    },
    'com.usegdi.templates.layout.layout-flex': {
        id: 'com.usegdi.templates.layout.layout-flex',
        name: 'layout-flex',
        description: '',
        params: {
            id: 'com.usegdi.templates.layout.layout-flex',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    structure: {
                        fieldType: 'json',
                        isRequired: true,
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            simple: {
                id: 'simple',
                strings: {},
                colors: {},
                extra: {},
            },
        },
        dimensions: {
            simple: {
                desktop: {
                    width: 1000,
                    height: 250,
                    ratio: 4,
                },
                mobile: {
                    width: 500,
                    height: 92,
                    ratio: 5.434782608695652,
                },
            },
        },
        screenshots: {
            simple: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 250,
                        ratio: 4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 250,
                        ratio: 4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 92,
                        ratio: 5.434782608695652,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 92,
                        ratio: 5.434782608695652,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-layout'],
    },
    'com.usegdi.templates.layout.layout-flow': {
        id: 'com.usegdi.templates.layout.layout-flow',
        name: 'layout-flow',
        description: '',
        params: {
            id: 'com.usegdi.templates.layout.layout-flow',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    structure: {
                        fieldType: 'json',
                        isRequired: true,
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            simple: {
                id: 'simple',
                strings: {},
                colors: {},
                extra: {},
            },
        },
        dimensions: {
            simple: {
                desktop: {
                    width: 1000,
                    height: 250,
                    ratio: 4,
                },
                mobile: {
                    width: 500,
                    height: 92,
                    ratio: 5.434782608695652,
                },
            },
        },
        screenshots: {
            simple: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 250,
                        ratio: 4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 250,
                        ratio: 4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 92,
                        ratio: 5.434782608695652,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 92,
                        ratio: 5.434782608695652,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-layout'],
    },
    'com.usegdi.templates.layout.layout-grid': {
        id: 'com.usegdi.templates.layout.layout-grid',
        name: 'layout-grid',
        description: '',
        params: {
            id: 'com.usegdi.templates.layout.layout-grid',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    structure: {
                        fieldType: 'json',
                        isRequired: true,
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            simple: {
                id: 'simple',
                strings: {},
                colors: {},
                extra: {},
            },
        },
        dimensions: {
            simple: {
                desktop: {
                    width: 1000,
                    height: 250,
                    ratio: 4,
                },
                mobile: {
                    width: 500,
                    height: 92,
                    ratio: 5.434782608695652,
                },
            },
        },
        screenshots: {
            simple: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 250,
                        ratio: 4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 1000,
                        height: 250,
                        ratio: 4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 92,
                        ratio: 5.434782608695652,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 500,
                        height: 92,
                        ratio: 5.434782608695652,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.blog.hero-simple.simple.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-layout'],
    },
};
