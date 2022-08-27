import { ISampleDataPerFlavour } from '@gdi/engine';

export const sampleData: ISampleDataPerFlavour = {
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
};
