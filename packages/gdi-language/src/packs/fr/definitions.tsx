import { definitionsBase } from '@gdi/language';

export const definitions: ILanguageDefinitions = {
    ...definitionsBase,
    languageCode: 'fr',
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
