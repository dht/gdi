import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { DataPage } from './DataPage';

export type DataPageContainerProps = {};

export function DataPageContainer(_props: DataPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <DataPage />;
}

export default DataPageContainer;
