import React from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { ITimelineConfig } from '../types';
import { useMemo } from '@gdi/hooks';

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

    const cValue = useMemo(
        () => ({
            ...state,
            patchState,
            callbacks: callbacksTimeline,
        }),
        [state, patchState, callbacksTimeline]
    );

    return (
        <TimelineContext.Provider value={cValue}>
            {props.children}
        </TimelineContext.Provider>
    );
};
