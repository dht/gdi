import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxContextBar } from './MuxContextBar';

export type MuxContextBarContainerProps = {};

export function MuxContextBarContainer(_props: MuxContextBarContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxContextBar />;
}

export default MuxContextBarContainer;
