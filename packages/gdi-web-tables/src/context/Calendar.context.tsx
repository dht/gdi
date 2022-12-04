import React from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import {
    ICalendarConfig,
    ICalendarOptions,
    ICalendarState,
    WithChildren,
} from '../types';
import { useMemo } from '@gdi/hooks';

export type CalendarContextProps = {
    config: ICalendarConfig;
    options: ICalendarOptions;
    callbacks: {};
};

type ICalendarContext = {
    patchState: (change: Partial<ICalendarState>) => void;
    config: ICalendarConfig;
    options: ICalendarOptions;
    state: ICalendarState;
    callbacks: {};
};

const initialValue: ICalendarContext = {
    patchState: () => {},
    config: {
        id: '',
    },
    options: {},
    state: {},
    callbacks: {},
};

export const CalendarContext = createContext<ICalendarContext>(initialValue);

export const CrudContextProvider = (
    props: WithChildren<CalendarContextProps>
) => {
    const { config, options } = props;

    const configValue = useMemo(
        () => ({
            ...initialValue,
            config,
            options,
        }),
        []
    );

    const [state, patchState] = useSetState<ICalendarState>({
        ...initialValue.state,
    });

    const callbacksCalendar = useMemo(() => ({}), [state]);

    const cValue = useMemo(
        () => ({
            ...configValue,
            state,
            callbacks: callbacksCalendar,
            patchState,
        }),
        [configValue, state, callbacksCalendar, patchState]
    );

    return (
        <CalendarContext.Provider value={cValue}>
            {props.children}
        </CalendarContext.Provider>
    );
};
