import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { PplGrid } from './PplGrid';

export type PplGridContainerProps = {};

export function PplGridContainer(_props: PplGridContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <PplGrid />;
}

export default PplGridContainer;
