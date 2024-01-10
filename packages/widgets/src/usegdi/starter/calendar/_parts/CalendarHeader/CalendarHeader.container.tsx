import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CalendarHeader } from './CalendarHeader';

export type CalendarHeaderContainerProps = {};

export function CalendarHeaderContainer(_props: CalendarHeaderContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <CalendarHeader />;
}

export default CalendarHeaderContainer;
