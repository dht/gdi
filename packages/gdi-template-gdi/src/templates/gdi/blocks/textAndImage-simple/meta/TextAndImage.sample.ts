import { ISampleDataPerFlavour } from '@gdi/web-ui';

export const sampleData: ISampleDataPerFlavour = {
    simpleFirst: {
        id: 'simpleFirst',
        strings: {
            slogan: 'morning',
            header: 'Wake up each morning to do',
            description:
                'With morning you are an effective team that gets things done, every minute, every hour, every day',
        },
        colors: {
            background: '#1a7870',
            text: '#aaef69',
        },
        extra: {
            imageUrl:
                'https://cdn.greeninvoice.co.il/public-website/assets/1.0.473/img/d9a9eec.svg',
            href: '#',
            isImageWide: false,
        },
    },
    simpleSecond: {
        id: 'simpleSecond',
        strings: {
            slogan: 'Try GDI',
            header: 'Open Source Web Presence',
            description:
                'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
        },
        colors: {
            background: 'dodgerblue',
            text: 'pink',
        },
        extra: {
            imageUrl: 'https://picsum.photos/seed/10/400/280',
            isImageWide: true,
        },
    },
};
