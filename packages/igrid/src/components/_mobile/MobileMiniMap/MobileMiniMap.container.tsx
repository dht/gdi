import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MobileMiniMap } from './MobileMiniMap';

export type MobileMiniMapContainerProps = {};

export function MobileMiniMapContainer(_props: MobileMiniMapContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MobileMiniMap />;
}

export default MobileMiniMapContainer;
