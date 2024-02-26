import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxTopBar } from './MuxTopBar';

export type MuxTopBarContainerProps = {};

export function MuxTopBarContainer(_props: MuxTopBarContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxTopBar />;
}

export default MuxTopBarContainer;
