import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CalendarMonth } from './CalendarMonth';

export type CalendarMonthContainerProps = {};

export function CalendarMonthContainer(_props: CalendarMonthContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <CalendarMonth />;
}

export default CalendarMonthContainer;
