import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxFocus } from './MuxFocus';

export type MuxFocusContainerProps = {};

export function MuxFocusContainer(_props: MuxFocusContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxFocus />;
}

export default MuxFocusContainer;
