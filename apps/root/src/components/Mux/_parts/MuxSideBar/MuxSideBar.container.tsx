import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxSideBar } from './MuxSideBar';

export type MuxSideBarContainerProps = {};

export function MuxSideBarContainer(_props: MuxSideBarContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxSideBar />;
}

export default MuxSideBarContainer;
