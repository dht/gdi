import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ExpressDebugger } from './ExpressDebugger';

export type ExpressDebuggerContainerProps = {};

export function ExpressDebuggerContainer(_props: ExpressDebuggerContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <ExpressDebugger />;
}

export default ExpressDebuggerContainer;
