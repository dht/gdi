import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { EventFocus } from './EventFocus';

export type EventFocusContainerProps = {};

export function EventFocusContainer(_props: EventFocusContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <EventFocus />;
}

export default EventFocusContainer;
