import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxHistory } from './MuxHistory';

export type MuxHistoryContainerProps = {};

export function MuxHistoryContainer(_props: MuxHistoryContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxHistory />;
}

export default MuxHistoryContainer;
