export const initialData: Json = {
    authState: {
        isLoggedIn: false,
    },
    me: {
        id: '',
        uid: '',
        displayName: '',
        company: '',
        email: '',
        emailVerified: false,
        phoneNumber: '',
        photoURL: '',
        providerId: '',
    },
    users: {
        '1': {
            id: '1',
            email: 'email@example.com',
        },
    },
    roles: {
        '1': {
            id: '1',
            role: 'admin',
        },
    },
    appStateMixer: {
        stateKey: 'mixer',
        mode: 'structure',
        selectedToolId: 'browse',
        paletteId: 'green',
        showImageUploadModal: false,
        showPlayModeMessage: false,
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
    widgetGalleryState: {
        stateKey: 'widgetGalleryState',
        mode: 'minimal',
        filter: 'byType',
        search: '',
    },
    currentIds: {
        pageId: 'home',
        selectedInstanceId: '',
        contentInstanceId: '',
        libraryInstanceId: '',
        fieldId: '',
    },
    libraryWidgets: {
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
            widgetType: 'feature',
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
            widgetType: 'footer',
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
            widgetType: 'hero',
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
                        backgroundImageUrl:
                            'https://appofthebox.web.app/1.webp',
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
                        imageCreditsDescription:
                            'neon lights triangle --ar 6:2',
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
        typographyId: 'inter',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 'regular',
    },
    instances: {
        'home-userBar-simple-1': {
            id: 'home-userBar-simple-1',
            widgetId: 'com.usegdi.templates.basic.userBar-simple',
            pageId: 'home',
            order: 1,
        },
        'home-hero-simple-1': {
            id: 'home-hero-simple-1',
            widgetId: 'com.usegdi.templates.basic.hero-simple',
            pageId: 'home',
            order: 2,
        },
        'home-sectionHeader-simple-1': {
            id: 'home-sectionHeader-simple-1',
            widgetId: 'com.usegdi.templates.basic.sectionHeader-simple',
            pageId: 'home',
            order: 3,
        },
        'home-installation-simple-1': {
            id: 'home-installation-simple-1',
            widgetId: 'com.usegdi.templates.basic.installation-simple',
            pageId: 'home',
            order: 4,
        },
        'home-sectionHeader-simple-2': {
            id: 'home-sectionHeader-simple-2',
            widgetId: 'com.usegdi.templates.basic.sectionHeader-simple',
            pageId: 'home',
            order: 5,
        },
        'home-feature-simple-1': {
            id: 'home-feature-simple-1',
            widgetId: 'com.usegdi.templates.basic.feature-simple',
            pageId: 'home',
            order: 6,
        },
        'home-feature-simple-2': {
            id: 'home-feature-simple-2',
            widgetId: 'com.usegdi.templates.basic.feature-simple',
            pageId: 'home',
            order: 7,
        },
        'home-feature-simple-3': {
            id: 'home-feature-simple-3',
            widgetId: 'com.usegdi.templates.basic.feature-simple',
            pageId: 'home',
            order: 8,
        },
        'home-feature-simple-4': {
            id: 'home-feature-simple-4',
            widgetId: 'com.usegdi.templates.basic.feature-simple',
            pageId: 'home',
            order: 9,
        },
        'home-lineCta-simple-1': {
            id: 'home-lineCta-simple-1',
            widgetId: 'com.usegdi.templates.basic.lineCta-simple',
            pageId: 'home',
            order: 10,
        },
        'home-sectionHeader-simple-3': {
            id: 'home-sectionHeader-simple-3',
            widgetId: 'com.usegdi.templates.basic.sectionHeader-simple',
            pageId: 'home',
            order: 11,
        },
        'home-imageAndText-simple-1': {
            id: 'home-imageAndText-simple-1',
            widgetId: 'com.usegdi.templates.basic.imageAndText-simple',
            pageId: 'home',
            order: 12,
        },
        'home-footer-simple-1': {
            id: 'home-footer-simple-1',
            widgetId: 'com.usegdi.templates.basic.footer-simple',
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
        localeId: 'en-us',
        isRtl: false,
    },
    widgets: {
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
                        backgroundImageUrl:
                            'https://appofthebox.web.app/1.webp',
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
                        imageCreditsDescription:
                            'neon lights triangle --ar 6:2',
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
            extra_imageUrl: 'https://appofthebox.web.app/6.webp',
            extra_showBeta: true,
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
            extra_imageUrl: 'https://appofthebox.web.app/s1.webp',
            extra_animated: true,
        },
        'home-feature-simple-2': {
            id: 'home-feature-simple-2',
            strings_slogan: 'Find new blocks',
            strings_header: 'Extendable',
            strings_description:
                'Add new NPM packages which contain new blocks & templates. Easily switch between blocks to keep block data //',
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s2.webp',
            extra_animated: true,
        },
        'home-feature-simple-3': {
            id: 'home-feature-simple-3',
            strings_slogan: 'Admin permissions',
            strings_header: 'Manageable',
            strings_description:
                "With a form-based admin-panel you can allow non-techies to edit the page's content //",
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s3.webp',
            extra_animated: true,
        },
        'home-feature-simple-4': {
            id: 'home-feature-simple-4',
            strings_slogan: 'See preview',
            strings_header: 'Visual',
            strings_description:
                'Use the preview to see the current page structure & design, change typography, color palettes and content //',
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s4.webp',
            extra_animated: true,
        },
        'home-lineCta-simple-1': {
            id: 'home-lineCta-simple-1',
            strings_textStrong: 'Unleash',
            strings_text: 'the power of Firebase ©',
            strings_ctaButtonText: 'Visit Github',
            extra_href: 'https://github.com/dht/gdi',
            extra_imageUrl: 'https://appofthebox.web.app/6.webp',
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
            extra_backgroundImageUrl: 'https://appofthebox.web.app/1.webp',
        },
        'home-footer-simple-1': {
            id: 'home-footer-simple-1',
            strings_copyright: 'Copyright 2022 ©',
        },
    },
    strings: {},
};
