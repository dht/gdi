import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { RetroUnix } from './RetroUnix';

export type RetroUnixContainerProps = {};

export function RetroUnixContainer(_props: RetroUnixContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <RetroUnix />;
}

export default RetroUnixContainer;
