import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ReminderFocus } from './ReminderFocus';

export type ReminderFocusContainerProps = {};

export function ReminderFocusContainer(_props: ReminderFocusContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <ReminderFocus />;
}

export default ReminderFocusContainer;
