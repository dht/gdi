import { ILanguageDefinitions, IWorkdayConfig, LanguageIso } from '../types';

const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

type FormatObjects = {
    date: Intl.DateTimeFormat;
    dateLong: Intl.DateTimeFormat;
    day: Intl.DateTimeFormat;
    dayShort: Intl.DateTimeFormat;
    time: Intl.DateTimeFormat;
    number: Intl.NumberFormat;
    numberFull: Intl.NumberFormat;
    currency: Intl.NumberFormat;
    currencyFull: Intl.NumberFormat;
    percent: Intl.NumberFormat;
    plural: Intl.PluralRules;
    relative: Intl.RelativeTimeFormat;
    listConjunction: Intl.ListFormat;
    listDisjunction: Intl.ListFormat;
    suffixes: Map<string, string>;
};

export const formatObjects: FormatObjects = {} as FormatObjects;

export let workdayConfig: IWorkdayConfig = {
    daysPerWeek: 5,
    hoursPerDay: 8,
};

export let languageCode: LanguageIso = 'en';

export const getLanguageCode = () => {
    return languageCode;
};

export const getIsRtl = () => {
    return rtlLanguages.includes(getLanguageCode());
};

export const setLanguageCode = (code: LanguageIso) => {
    languageCode = code;
};

export const initFormat = (definitions: ILanguageDefinitions) => {
    const {
        dateLongOptions,
        dateOptions,
        timeOptions,
        numberOptions,
        currencyOptions,
        percentOptions,
        pluralOptions,
        relativeOptions,
        listOptions,
        suffixes,
    } = definitions;

    setLanguageCode(definitions.languageCode);

    formatObjects.dateLong = new Intl.DateTimeFormat(languageCode, dateOptions);

    formatObjects.date = new Intl.DateTimeFormat(languageCode, dateOptions);

    formatObjects.dateLong = new Intl.DateTimeFormat(
        languageCode,
        dateLongOptions
    );

    formatObjects.day = new Intl.DateTimeFormat(languageCode, {
        weekday: 'long',
    });

    formatObjects.dayShort = new Intl.DateTimeFormat(languageCode, {
        weekday: 'short',
    });

    formatObjects.time = new Intl.DateTimeFormat(languageCode, timeOptions);

    formatObjects.number = new Intl.NumberFormat(languageCode, {
        ...numberOptions,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    formatObjects.numberFull = new Intl.NumberFormat(languageCode, {
        ...numberOptions,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    formatObjects.currency = new Intl.NumberFormat(languageCode, {
        ...currencyOptions,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    formatObjects.currencyFull = new Intl.NumberFormat(languageCode, {
        ...currencyOptions,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    formatObjects.percent = new Intl.NumberFormat(languageCode, {
        ...percentOptions,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    formatObjects.plural = new Intl.PluralRules(languageCode, pluralOptions);

    formatObjects.relative = new Intl.RelativeTimeFormat(
        languageCode,
        relativeOptions
    );

    formatObjects.listConjunction = new Intl.ListFormat(languageCode, {
        ...listOptions,
        type: 'conjunction',
    });

    formatObjects.listDisjunction = new Intl.ListFormat(languageCode, {
        ...listOptions,
        type: 'disjunction',
    });

    formatObjects.suffixes = new Map(suffixes as any);
};

export const setWorkingHours = (workingHours: IWorkdayConfig) => {
    workdayConfig = workingHours;
};
