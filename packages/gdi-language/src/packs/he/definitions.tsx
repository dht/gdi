import { definitionsBase } from '@gdi/language';

export const definitions: ILanguageDefinitions = {
    ...definitionsBase,
    languageCode: 'he',
    currencyOptions: {
        style: 'currency',
        currency: 'ILS',
    },
    suffixes: [
        ['one', ''],
        ['two', ''],
        ['few', ''],
        ['other', ''],
    ],
};
