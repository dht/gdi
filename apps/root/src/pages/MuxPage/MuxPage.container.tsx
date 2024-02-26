import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxPage } from './MuxPage';

export type MuxPageContainerProps = {};

export function MuxPageContainer(_props: MuxPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxPage />;
}

export default MuxPageContainer;
