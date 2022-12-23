import { ILanguageDefinitions } from '../types';
import { initFormat } from '../utils/formatObjects';

export const definitionsBase: ILanguageDefinitions = {
    languageCode: 'en',
    isMonthFirst: true,
    dateOptions: {},
    dateLongOptions: {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    },
    timeOptions: {
        hour: 'numeric',
        minute: 'numeric',
    },
    numberOptions: {
        style: 'decimal',
    },
    currencyOptions: {
        style: 'currency',
        currency: 'USD',
    },
    percentOptions: {
        style: 'percent',
    },
    pluralOptions: {},
    relativeOptions: {
        style: 'short',
    },
    listOptions: {
        type: 'conjunction',
        style: 'short',
    },
    suffixes: [
        ['one', 'st'],
        ['two', 'nd'],
        ['few', 'rd'],
        ['other', 'th'],
    ],
};

export const initLanguagePack = () => {
    initFormat(definitionsBase);
};
