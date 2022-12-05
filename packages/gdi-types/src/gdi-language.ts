// AUTO-GENERATED

export const A26 = {};

declare global {
    export type ILanguageConfig = {};

    export type ILanguageOptions = {};

    export type ILanguageState = {
        languageId: LanguageIso;
    };

    export type ILanguageAppState = {
        appId: string;
    };

    export type II18nBuilder = {
        withLanguage: (
            appId: string,
            language: LanguageIso,
            data: Json
        ) => II18nBuilder;
        withKeysByLanguage: (
            appId: string,
            keysByLanguage: Json
        ) => II18nBuilder;
        build: () => IAppKeys;
    };

    export type LanguageIso =
        | 'en' //
        | 'de'
        | 'es'
        | 'fr'
        | 'he'
        | 'it'
        | 'nl';

    export type ILanguage = {
        id: LanguageIso;
        name: string;
        nameFull: string;
        isRtl?: boolean;
    };

    export type ILanguages = Record<LanguageIso, ILanguage>;

    export type ILanguageDefinitions = {
        languageCode: LanguageIso;
        dateOptions: Intl.DateTimeFormatOptions;
        dateLongOptions: Intl.DateTimeFormatOptions;
        timeOptions: Intl.DateTimeFormatOptions;
        numberOptions: Intl.NumberFormatOptions;
        currencyOptions: Intl.NumberFormatOptions;
        percentOptions: Intl.NumberFormatOptions;
        pluralOptions: Intl.PluralRulesOptions;
        relativeOptions: Intl.RelativeTimeFormatOptions;
        listOptions: Intl.ListFormatOptions;
        suffixes: string[][];
    };

    export type IAppKeys = Record<LanguageIso, Json>;

    export type DateTime = Date | number | string;

    export type IWorkdayConfig = {
        hoursPerDay: number;
        daysPerWeek: number;
    };

    export type TimePeriod =
        | 'second'
        | 'minute'
        | 'hour'
        | 'day'
        | 'week'
        | 'month'
        | 'year';

    export type SecondsPerTimePeriod = Record<TimePeriod, number>;

    export type IDuration = Record<TimePeriod, number>;

    export type DateInfo = {
        dayOfWeek: number;
        dayOfYear?: number;
        week?: number;
        year: number;
        yearShort: string;
        quarter?: number;
        hour: string;
        dayOfWeekName: string;
        dayOfWeekShortName: string;
        dateString: string;
        dateShortString: string;
        dateStringFull: string;
        weekAndYear: string;
        dateStringWeek: string;
        isToday?: boolean;
    };

    export type IInterval = {
        start: DateTime;
        end: DateTime;
    };
}
