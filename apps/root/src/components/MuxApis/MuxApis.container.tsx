import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxApis } from './MuxApis';

export type MuxApisContainerProps = {};

export function MuxApisContainer(_props: MuxApisContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxApis />;
}

export default MuxApisContainer;
