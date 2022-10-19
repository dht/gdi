import { useCallback } from 'react';
import { LanguageIso } from '../types';
import * as t from '../utils/language.translate';

export function useTranslation(forceLanguageId?: LanguageIso) {
    const method: T = useCallback((key: string) => {
        return t.translate(key);
    }, []);

    return { t: method };
}

export type T = (key: string) => string;

export const emptyT: T = (key: string) => '';
