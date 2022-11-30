import { ISampleDataPerFlavour } from '@gdi/web-ui';

export const sampleData: ISampleDataPerFlavour = {
    normal: {
        id: 'normal',
        strings: {
            slogan: "There's a new CMS in town",
            header: 'gDI',
            ctaButtonText: 'Get started',
            secondaryButtonText: 'Visit Github',
        },
        colors: {},
        extra: {
            installation: 'npm install -g @gdi/cli',
            href: 'https://usegdi.com/docs/docs/getting-started/installation',
            hrefSecondary: 'https://github.com/dht/gdi',
            imageUrl: 'https://static-b9ebe.web.app/gdi-hero.jpg',
        },
    },
};
