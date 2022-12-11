import { definitionsBase } from '../../data/definitions.base';

export const definitions: ILanguageDefinitions = {
    ...definitionsBase,
    languageCode: 'nl',
    currencyOptions: {
        style: 'currency',
        currency: 'EUR',
    },
    suffixes: [
        ['one', ''],
        ['two', ''],
        ['few', ''],
        ['other', ''],
    ],
};
