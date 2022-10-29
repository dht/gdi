// AUTO-GENERATED

export const A27 = {};

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
        dateOptions: Intl.DateTimeFormatOptions;
        timeOptions: Intl.DateTimeFormatOptions;
        numberOptions: Intl.NumberFormatOptions;
        currencyOptions: Intl.NumberFormatOptions;
        pluralOptions: Intl.PluralRulesOptions;
        relativeOptions: Intl.RelativeTimeFormatOptions;
    };

    export type IAppKeys = Record<LanguageIso, Json>;

    export type DateTime = Date | number | string;
}
