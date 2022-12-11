import { definitionsBase } from '@gdi/language';

export const definitions: ILanguageDefinitions = {
    ...definitionsBase,
    languageCode: 'it',
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
