export default {
    meta: {
        schemaVersion: '1.0.1',
    },
    appStateMixer: {
        stateKey: 'mixer',
        mode: 'structure',
        selectedToolId: 'browse',
        paletteId: 'blue',
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
    libraryWidgets: {},
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
