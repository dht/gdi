import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useLocalStorage } from 'react-use';
import { emptyL, L, useLanguage } from '../hooks/useLanguage';
import {
    IAppKeys,
    ILanguageConfig,
    ILanguageOptions,
    ILanguageState,
    LanguageIso,
} from '../types';
import { getLanguageCode } from '../utils/formatObjects';

type LanguageContextProps = {
    id: string;
    config?: ILanguageConfig;
    options?: ILanguageOptions;
    initialLanguageId?: LanguageIso;
    keys: IAppKeys;
};

type ILanguageContext = L & {
    patchState: (change: Partial<ILanguageState>) => void;
    config: ILanguageConfig;
    options: ILanguageOptions;
    state: ILanguageState;
    callbacks: {
        onLanguageChange: (languageId: string) => void;
    };
    keys: Partial<IAppKeys>;
    languageId: LanguageIso;
};

const initialValue: ILanguageContext = {
    patchState: () => {},
    state: {
        languageId: 'en',
    },
    config: {},
    options: {},
    callbacks: {
        onLanguageChange: (languageId: string) => {},
    },
    keys: {},
    ...emptyL,
    languageId: 'en',
};

export const LanguageContext = createContext<ILanguageContext>(initialValue);

export const LanguageContextProvider = (
    props: WithChildren<LanguageContextProps>
) => {
    const { id, config = {}, options = {}, keys } = props;

    const configValue = useMemo(
        () => ({
            ...initialValue,
            config,
            options,
        }),
        []
    );

    const localStorageKey = `Language_CONTEXT_${id}`;

    const [state, patchState] = useLocalStorage<ILanguageState>(
        localStorageKey,
        {
            ...initialValue.state,
        }
    );

    const { m, n, d, h, t } = useLanguage();

    const callbacksLanguage = useMemo(
        () => ({
            onLanguageChange: (languageId: string) => {},
        }),
        [state]
    );

    return (
        <LanguageContext.Provider
            value={{
                ...configValue,
                state: state!,
                patchState: patchState as any,
                callbacks: callbacksLanguage,
                keys,
                languageId: getLanguageCode(),
                m,
                n,
                d,
                h,
                t,
            }}
        >
            {props.children}
        </LanguageContext.Provider>
    );
};

type WithChildren<T> = T & {
    children?: JSX.Element | JSX.Element[];
};
