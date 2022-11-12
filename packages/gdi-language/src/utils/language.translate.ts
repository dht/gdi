import { IAppKeys, LanguageIso } from '../types';
import { getVariableType } from 'shared-base';
import { log } from './language.log';

export const translate = (
    keys: IAppKeys,
    language: LanguageIso,
    appId: string,
    key: string
): string => {
    const value = keys[language][`${appId}_${key}`];

    if (!value) {
        // log(language, appId, key);
    }

    return value || key;
};

export const translationExists = (
    keys: IAppKeys,
    language: LanguageIso,
    appId: string,
    key: string
) => {
    return typeof keys[language][`${appId}_${key}`] === 'string';
};

export const translateWithOrder = (
    keys: IAppKeys,
    language: LanguageIso,
    appId: string,
    keyArr: string[]
) => {
    const key = keyArr.find((key) =>
        translationExists(keys, language, appId, key)
    );
    return translate(keys, language, appId, key ?? keyArr[0]);
};

export const translateDefinitions = (
    keys: IAppKeys,
    language: LanguageIso,
    appId: string,
    crudDefinitions: ICrudDefinitions
) => {
    return translateObject(keys, language, appId, crudDefinitions, [
        'title',
        'header',
        'label',
        'placeholder',
        'description',
    ]);
};

export const translateObject = (
    keys: IAppKeys,
    language: LanguageIso,
    appId: string,
    object: Json,
    fieldsToTranslate: string[] = ['title', 'label']
) => {
    if (Array.isArray(object)) {
        return translateArray(keys, language, appId, object, fieldsToTranslate);
    }

    return Object.keys(object).reduce((acc, key) => {
        const varType = getVariableType(object[key]);

        if (varType === 'array') {
            acc[key] = translateArray(
                keys,
                language,
                appId,
                object[key],
                fieldsToTranslate
            );
        } else if (varType === 'object') {
            acc[key] = translateObject(
                keys,
                language,
                appId,
                object[key],
                fieldsToTranslate
            );
        } else if (varType === 'string') {
            if (fieldsToTranslate.includes(key)) {
                const localAppId = object['appId'];

                acc[key] = translate(
                    keys,
                    language,
                    localAppId ?? appId,
                    object[key]
                );
            } else {
                acc[key] = object[key];
            }
        } else {
            acc[key] = object[key];
        }

        return acc;
    }, {} as Json);
};

export const translateArray = (
    keys: IAppKeys,
    language: LanguageIso,
    appId: string,
    object: Json[] | string[],
    fieldsToTranslate: string[] = []
): Json[] | string[] => {
    const firstObject = object[0];

    if (typeof firstObject === 'string') {
        return (object as string[]).map((item: string) =>
            translate(keys, language, appId, item)
        );
    }

    return (object as Json[]).map((item: Json) =>
        translateObject(keys, language, appId, item, fieldsToTranslate)
    );
};

type I18nParams = {
    languageCode: LanguageIso;
    keys: IAppKeys;
    appId?: string;
};

export const translateMenu = (items: IMenuItems, params: I18nParams) => {
    const { keys, languageCode } = params;
    return translateObject(keys, languageCode, 'platform', items, ['label']);
};

export const translateContextBar = (
    items: IContextBarItems,
    params: I18nParams
) => {
    const { keys, languageCode } = params;
    return translateObject(keys, languageCode, 'platform', items, ['label']);
};

export const translateCommandBar = (
    items: ICommandBarItems,
    params: I18nParams
) => {
    const { keys, languageCode } = params;
    return translateObject(keys, languageCode, 'platform', items, ['label']);
};

export const translatePieMenu = (
    config: IPieMenuConfigPerItemType,
    params: I18nParams
) => {
    const { keys, languageCode } = params;

    return Object.keys(config).reduce((acc, key) => {
        const { options } = (config as any)[key];

        const translatedOptions = translateObject(
            keys,
            languageCode,
            'platform',
            options,
            ['text']
        );

        (acc as any)[key] = {
            ...(config as any)[key],
            options: translatedOptions,
        };

        return acc;
    }, {} as IPieMenuConfigPerItemType);
};

export const translateDefinitionsPerApp = (
    crudDefinitionsPerApp: Json,
    params: I18nParams
) => {
    const { keys, languageCode } = params;

    return Object.keys(crudDefinitionsPerApp).reduce((acc, appId) => {
        const definitions = crudDefinitionsPerApp[appId];

        Object.keys(definitions).forEach((key) => {
            acc[key] = translateDefinitions(
                keys,
                languageCode,
                appId,
                definitions[key]
            );
        });

        return acc;
    }, {} as any);
};

export const objectTranslate = {
    menu: translateMenu,
    contextBar: translateContextBar,
    commandBar: translateCommandBar,
    pieMenu: translatePieMenu,
    definitions: translateDefinitionsPerApp,
};
