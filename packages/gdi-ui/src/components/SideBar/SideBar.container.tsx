import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { SideBar } from './SideBar';

export type SideBarContainerProps = {};

export function SideBarContainer(_props: SideBarContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <SideBar />;
}

export default SideBarContainer;
