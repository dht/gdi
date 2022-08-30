import * as React from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { IPlatformContextState } from '../types';
import { emptyStore } from '../store-builder/data/emptyStore';

const initialState: IPlatformContextState = {
    isReady: false,
    noServerMode: false,
    locale: 'en',
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
    patchContext: () => {},
};

export const PlatformContext = createContext<IPlatformContextState>(initialState); // prettier-ignore

type PlatformProps = {
    children: JSX.Element | JSX.Element[];
    initialRoute: string;
    noServerMode?: boolean;
};

export const PlatformContextProvider = (props: PlatformProps) => {
    const { initialRoute, noServerMode } = props;

    const [state, patchState] = useSetState<IPlatformContextState>({
        ...initialState,
        initialRoute,
        noServerMode,
    });

    return (
        <PlatformContext.Provider
            value={{
                ...state,
                patchContext: patchState,
            }}
        >
            {props.children}
        </PlatformContext.Provider>
    );
};
