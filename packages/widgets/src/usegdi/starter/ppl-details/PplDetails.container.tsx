import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { PplDetails } from './PplDetails';

export type PplDetailsContainerProps = {};

export function PplDetailsContainer(_props: PplDetailsContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <PplDetails />;
}

export default PplDetailsContainer;
