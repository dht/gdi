import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { ITimelineConfig } from '../types';

type ITimelineContext = {
    patchState: (change: Partial<ITimelineContext>) => void;
    multiConfig?: ITimelineConfig;
    callbacks: {};
};

const initialState: ITimelineContext = {
    callbacks: {},
    patchState: () => {},
};

export const TimelineContext = createContext<ITimelineContext>(initialState);

export type TimelineProps = ITimelineConfig & {
    callbacks: {};
};

export type TimelineContextProviderProps = TimelineProps & {
    children: JSX.Element;
};

export const TimelineContextProvider = (
    props: TimelineContextProviderProps
) => {
    const [state, patchState] = useSetState<ITimelineContext>({
        ...initialState,
    });

    const callbacksTimeline = useMemo(() => ({}), [state]);

    return (
        <TimelineContext.Provider
            value={{
                ...state,
                callbacks: callbacksTimeline,
                patchState,
            }}
        >
            {props.children}
        </TimelineContext.Provider>
    );
};
