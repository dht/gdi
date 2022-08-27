import { ISampleDataPerFlavour } from '@gdi/engine';

export const sampleData: ISampleDataPerFlavour = {
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
};
