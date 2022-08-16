import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export const createTranslationHook = (appId: string) => () => {
    const base = useTranslation();

    const t = useCallback(
        (...args: any[]) => {
            const params = [...args];
            const [key] = params;

            const scopedKey = `${appId}_${key}`;
            params[0] = scopedKey;

            return base.t.apply(this, params as any);
        },
        [base.t]
    );

    return {
        t,
        i18n: base.i18n,
        ready: base.ready,
    };
};
