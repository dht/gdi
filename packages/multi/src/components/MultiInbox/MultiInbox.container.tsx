import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MultiInbox } from './MultiInbox';

export type MultiInboxContainerProps = {};

export function MultiInboxContainer(_props: MultiInboxContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MultiInbox />;
}

export default MultiInboxContainer;
