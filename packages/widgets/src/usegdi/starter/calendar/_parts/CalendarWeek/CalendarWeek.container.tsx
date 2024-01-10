import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CalendarWeek } from './CalendarWeek';

export type CalendarWeekContainerProps = {};

export function CalendarWeekContainer(_props: CalendarWeekContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <CalendarWeek />;
}

export default CalendarWeekContainer;
