import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CalenderDay } from './CalenderDay';

export type CalenderDayContainerProps = {};

export function CalenderDayContainer(_props: CalenderDayContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <CalenderDay />;
}

export default CalenderDayContainer;
