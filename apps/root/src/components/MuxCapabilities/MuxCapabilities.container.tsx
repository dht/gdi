import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxCapabilities } from './MuxCapabilities';

export type MuxCapabilitiesContainerProps = {};

export function MuxCapabilitiesContainer(_props: MuxCapabilitiesContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxCapabilities />;
}

export default MuxCapabilitiesContainer;
