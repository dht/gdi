import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Reminders } from './Reminders';

export type RemindersContainerProps = {};

export function RemindersContainer(_props: RemindersContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Reminders />;
}

export default RemindersContainer;
