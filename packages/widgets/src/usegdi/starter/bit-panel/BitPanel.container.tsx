import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { BitPanel } from './BitPanel';

export type BitPanelContainerProps = {};

export function BitPanelContainer(_props: BitPanelContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <BitPanel />;
}

export default BitPanelContainer;
