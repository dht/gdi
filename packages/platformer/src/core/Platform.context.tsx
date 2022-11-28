import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { IPlatformState } from '../types';
import { createStore } from 'redux';

type PlatformContextProps = {
    languageCode: LanguageIso;
    initialRoute: string;
    noServerMode?: boolean;
    isRtl: boolean;
};

type IPlatformContext = {
    patchContext: (change: Partial<IPlatformState>) => void;
    state: IPlatformState;
};

const reducer = (state: any) => state;
const emptyStore = createStore(reducer) as any;

const initialValue: IPlatformContext = {
    patchContext: () => {},
    state: {
        accountName: '',
        availableAccounts: [],
        isReady: false,
        noServerMode: false,
        languageCode: 'en',
        isRtl: false,
        initialRoute: '',
        navigate: () => {},
        store: emptyStore,
        routes: {},
        menuItems: [],
        menuGroups: [],
        instancesByPage: {},
        selectors: {},
        widgetLibrary: {},
        commandBarItems: [],
        contextBarItems: [],
        i18nKeys: {
            de: {},
            en: {},
            es: {},
            fr: {},
            he: {},
            it: {},
            nl: {},
        },
        crudDefinitions: {},
        pieMenuConfig: {},
        templatesMeta: {},
    },
};

export const PlatformContext = createContext<IPlatformContext>(initialValue);

export const PlatformContextProvider = (
    props: WithChildren<PlatformContextProps>
) => {
    const { initialRoute, noServerMode, languageCode, isRtl } = props;

    const [state, patchContext] = useSetState<IPlatformState>({
        ...initialValue.state,
        initialRoute,
        noServerMode,
        languageCode,
        isRtl,
    });

    const value = useMemo(
        () => ({
            state: state!,
            patchContext: patchContext as any,
        }),
        [state]
    );

    return (
        <PlatformContext.Provider value={value}>
            {props.children}
        </PlatformContext.Provider>
    );
};

type WithChildren<T> = T & {
    children?: JSX.Element | JSX.Element[];
};
