import * as React from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { useTemplates } from '../hooks/useTemplates';
import { IEngineContextState } from '../types';

const initialState: IEngineContextState = {
    isReady: false,
    widgets: {},
    patchContext: () => {},
};

export const EngineContext = createContext<IEngineContextState>(initialState); // prettier-ignore

type EngineProps = {
    children: JSX.Element | JSX.Element[];
    libraryBuilder: ILibraryBuilder;
};

export const EngineContextProvider = (props: EngineProps) => {
    const { libraryBuilder } = props;
    const [state, patchState] = useSetState<IEngineContextState>({
        ...initialState,
    });

    const { isReady, widgets } = useTemplates(libraryBuilder);

    return (
        <EngineContext.Provider
            value={{
                ...state,
                isReady,
                widgets,
                patchContext: patchState,
            }}
        >
            {props.children}
        </EngineContext.Provider>
    );
};
