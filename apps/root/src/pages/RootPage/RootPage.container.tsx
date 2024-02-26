import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { RootPage } from './RootPage';

export type RootPageContainerProps = {};

export function RootPageContainer(_props: RootPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <RootPage />;
}

export default RootPageContainer;
