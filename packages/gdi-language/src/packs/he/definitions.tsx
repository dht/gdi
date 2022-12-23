import { definitionsBase } from '../../data/definitions.base';

export const definitions: ILanguageDefinitions = {
    ...definitionsBase,
    languageCode: 'he',
    isMonthFirst: false,
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
