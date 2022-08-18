import { ISampleDataPerFlavour } from '@gdi/web-ui';

export const sampleData: ISampleDataPerFlavour = {
    simple: {
        id: 'simple',
        strings: {
            ctaButtonText: 'Get Started',
            secondButtonText: 'Github',
            header: 'gDI',
            description:
                'An open-source & extendable content management system (CMS) written in ReactJS, hosted on Firebase //',
        },
        colors: {
            text: '#fff',
        },
        extra: {
            href: 'https://github.com/dht/gdi/docs',
            hrefSecond: 'https://github.com/dht/gdi',
            imageUrl: 'https://appofthebox.web.app/6.png',
            headerSize: 70,
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
            headerSize: 70,
        },
    },
};
