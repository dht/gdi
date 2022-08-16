import * as React from 'react';
import { createContext, useEffect } from 'react';
import { useSetState } from 'react-use';
import { ActionType } from '../components/EngineEdit/EngineEdit';
import { useTemplates } from '../hooks/useTemplates';
import { IEngineContextState } from '../types';

const initialState: IEngineContextState = {
    isReady: false,
    blocks: {},
    patchContext: () => {},
};

export const EngineContext = createContext<IEngineContextState>(initialState); // prettier-ignore

type EngineProps = {
    children: JSX.Element | JSX.Element[];
};

export const EngineContextProvider = (props: EngineProps) => {
    const [state, patchState] = useSetState<IEngineContextState>({
        ...initialState,
    });

    const { isReady, blocks } = useTemplates();

    return (
        <EngineContext.Provider
            value={{
                ...state,
                isReady,
                blocks,
                patchContext: patchState,
            }}
        >
            {props.children}
        </EngineContext.Provider>
    );
};
