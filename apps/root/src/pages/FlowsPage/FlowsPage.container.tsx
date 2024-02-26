import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { FlowsPage } from './FlowsPage';

export type FlowsPageContainerProps = {};

export function FlowsPageContainer(_props: FlowsPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <FlowsPage />;
}

export default FlowsPageContainer;
