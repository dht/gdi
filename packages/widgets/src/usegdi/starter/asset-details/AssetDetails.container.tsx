import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { AssetDetails } from './AssetDetails';

export type AssetDetailsContainerProps = {};

export function AssetDetailsContainer(_props: AssetDetailsContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <AssetDetails />;
}

export default AssetDetailsContainer;
