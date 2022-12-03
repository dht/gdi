import p from '../package.json';

export const meta: IMetaSite = {
    identifier: 'com.usegdi.templates.gdi',
    description: p.description,
    packageType: p.gdi.packageType as any,
    isBeta: p.gdi.isBeta,
    isDraft: p.gdi.isDraft,
    version: p.version,
    author: {
        name: '',
    },
};

export const pages: IPages = {
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
};

export const pageInstances: IPageInstances = {
    homeDraft1: {
        id: 'homeDraft1',
        description: '',
        pageId: 'home',
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
};

export const instances: IWidgetInstances = {
    'home-placeholder-basic-1': {
        id: 'home-placeholder-basic-1',
        widgetId: 'com.usegdi.templates.basic.placeholder-basic',
        pageInstanceId: 'home',
        order: 1,
    },
};

export const instancesProps: Json = {
    'home-placeholder-basic-1': {
        id: 'home-placeholder-basic-1',
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
};
