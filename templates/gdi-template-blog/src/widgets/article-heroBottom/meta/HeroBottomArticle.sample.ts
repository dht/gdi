import { articles } from '../../../data/sample.articles';

export const sampleData: ISampleDataPerFlavour = {
    simple: {
        id: 'simple',
        strings: {},
        colors: {},
        extra: {
            index: 0,
            totalWidth: 1000,
            article: articles[0],
        },
    },
};
