import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { AssetsPage } from './AssetsPage';

export type AssetsPageContainerProps = {};

export function AssetsPageContainer(_props: AssetsPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <AssetsPage />;
}

export default AssetsPageContainer;
