import React from 'react';
import { createContext } from 'react';
import { WithChildren } from '../types';
import { useMemo } from '@gdi/hooks';

type DispatchContextProps = {
    dispatch: any;
};

type IDispatchContext = {
    callbacks: {
        dispatch: any;
    };
};

const initialValue: IDispatchContext = {
    callbacks: {
        dispatch: (action: any) => {},
    },
};

export const DispatchContext = createContext<IDispatchContext>(initialValue);

export const DispatchContextProvider = (
    props: WithChildren<DispatchContextProps>
) => {
    const { dispatch } = props;

    const callbacksDispatch = useMemo(
        () => ({
            dispatch: (action: any) => {
                return dispatch(action);
            },
        }),
        [dispatch]
    );

    const cValue = useMemo(
        () => ({
            callbacks: callbacksDispatch,
        }),
        [callbacksDispatch]
    );

    return (
        <DispatchContext.Provider value={cValue}>
            {props.children}
        </DispatchContext.Provider>
    );
};
