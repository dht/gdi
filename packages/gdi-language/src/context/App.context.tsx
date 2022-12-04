import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';

type AppContextProps = {
    appId: string;
};

type IAppState = {
    appId: string;
};

type IAppContext = {
    patchState: (change: Partial<IAppState>) => void;
    setAppId: (appId: string) => void;
    state: IAppState;
};

const initialValue: IAppContext = {
    patchState: () => {},
    setAppId: (appId: string) => {},
    state: {
        appId: '',
    },
};

export const AppContext = createContext<IAppContext>(initialValue);

export const AppContextProvider = (props: WithChildren<AppContextProps>) => {
    const { appId } = props;

    const [state, patchState] = useSetState<IAppState>({
        ...initialValue.state,
        appId,
    });

    const callbacks = useMemo(
        () => ({
            setAppId: (appId: string) => {
                patchState({ appId });
            },
        }),
        [state]
    );

    const cValue = useMemo(
        () => ({
            state,
            patchState,
            setAppId: callbacks.setAppId,
        }),
        [state, patchState, callbacks]
    );

    return (
        <AppContext.Provider value={cValue}>
            {props.children}
        </AppContext.Provider>
    );
};

type WithChildren<T> = T & {
    children?: JSX.Element | JSX.Element[];
};
