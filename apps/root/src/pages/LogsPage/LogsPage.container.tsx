import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { LogsPage } from './LogsPage';

export type LogsPageContainerProps = {};

export function LogsPageContainer(_props: LogsPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <LogsPage />;
}

export default LogsPageContainer;
