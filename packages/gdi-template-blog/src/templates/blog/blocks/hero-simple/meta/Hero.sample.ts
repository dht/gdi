import { ISampleDataPerFlavour } from '@gdi/engine';

export const sampleData: ISampleDataPerFlavour = {
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
            imageUrl: 'https://appofthebox.web.app/neon.png',
            headerFontSize: 120,
        },
    },
};
