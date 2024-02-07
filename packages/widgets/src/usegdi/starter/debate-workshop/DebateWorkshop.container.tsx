import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { DebateWorkshop } from './DebateWorkshop';

export type DebateWorkshopContainerProps = {};

export function DebateWorkshopContainer(_props: DebateWorkshopContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <DebateWorkshop />;
}

export default DebateWorkshopContainer;
