import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxFlows } from './MuxFlows';

export type MuxFlowsContainerProps = {};

export function MuxFlowsContainer(_props: MuxFlowsContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxFlows />;
}

export default MuxFlowsContainer;
