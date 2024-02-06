import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Spotlight } from './Spotlight';

export type SpotlightContainerProps = {};

export function SpotlightContainer(_props: SpotlightContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Spotlight />;
}

export default SpotlightContainer;
