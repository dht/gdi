import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { HistoryPage } from './HistoryPage';

export type HistoryPageContainerProps = {};

export function HistoryPageContainer(_props: HistoryPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <HistoryPage />;
}

export default HistoryPageContainer;
