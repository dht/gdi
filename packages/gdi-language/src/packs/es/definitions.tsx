import { definitionsBase } from '../../data/definitions.base';

export const definitions: ILanguageDefinitions = {
    ...definitionsBase,
    languageCode: 'es',
    isMonthFirst: false,
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
