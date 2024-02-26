import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CapabilitiesPage } from './CapabilitiesPage';

export type CapabilitiesPageContainerProps = {};

export function CapabilitiesPageContainer(_props: CapabilitiesPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <CapabilitiesPage />;
}

export default CapabilitiesPageContainer;
