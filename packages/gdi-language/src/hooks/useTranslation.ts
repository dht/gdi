import * as t from '../utils/language.translate';
import { AppContext } from '../context/App.context';
import { IAppKeys } from '../types';
import { LanguageContext } from '../context/Language.context';
import { useCallback, useContext } from 'react';
import { cardinal } from '../utils/language.plural';

export function useTranslation() {
    const { appId } = useContext(AppContext).state;
    const { keys, languageId } = useContext(LanguageContext);

    const translate: T = useCallback(
        (key: string) => {
            return t.translate(keys as IAppKeys, languageId, appId, key);
        },
        [appId, keys, languageId]
    );

    const translateWithOrder = useCallback(
        (key: string[]) => {
            return t.translateWithOrder(
                keys as IAppKeys,
                languageId,
                appId,
                key
            );
        },
        [appId, keys, languageId]
    );

    const translateDefinitions = useCallback(
        (crudDefinitions: ICrudDefinitions) => {
            return t.translateDefinitions(
                keys as IAppKeys,
                languageId,
                appId,
                crudDefinitions
            );
        },
        [appId, keys, languageId]
    );

    const translateJson = useCallback(
        (json: Json) => {
            return t.translateObject(keys as IAppKeys, languageId, appId, json);
        },
        [appId, keys, languageId]
    );

    const translateNoun = useCallback(
        (key: string, count: number) => {
            const values = {
                one: translateWithOrder([`${key}One`, key]),
                two: translateWithOrder([`${key}Two`, `${key}Few`, key]),
                few: translateWithOrder([`${key}Few`, key]),
                other: translateWithOrder([`${key}Other`, `${key}Few`, key]),
            };

            const nouns = [
                ['one', values.one],
                ['two', values.two],
                ['few', values.few],
                ['other', values.other],
            ];

            return cardinal(count, nouns);
        },
        [appId, keys, languageId]
    );

    return {
        t: translate,
        td: translateDefinitions,
        tn: translateNoun,
        tj: translateJson,
    };
}

export type T = (key: string) => string;
export type TN = (key: string, count: number) => string;
export type TJ = (json: Json) => Json;
export type TD = (crudDefinitions: ICrudDefinitions) => ICrudDefinitions;

export const emptyT: T = (key: string) => '';
export const emptyTN: TN = (key: string, count: number) => '';
export const emptyTJ: TJ = (json: Json) => ({});
export const emptyTD: TD = (crudDefinitions: ICrudDefinitions) => ({} as any); // prettier-ignore
