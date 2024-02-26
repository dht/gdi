import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxLogs } from './MuxLogs';

export type MuxLogsContainerProps = {};

export function MuxLogsContainer(_props: MuxLogsContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxLogs />;
}

export default MuxLogsContainer;
