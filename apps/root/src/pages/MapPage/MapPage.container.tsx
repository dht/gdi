import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MapPage } from './MapPage';

export type MapPageContainerProps = {};

export function MapPageContainer(_props: MapPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MapPage />;
}

export default MapPageContainer;
