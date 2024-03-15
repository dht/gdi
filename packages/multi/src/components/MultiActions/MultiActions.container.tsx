import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MultiActions } from './MultiActions';

export type MultiActionsContainerProps = {};

export function MultiActionsContainer(_props: MultiActionsContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MultiActions />;
}

export default MultiActionsContainer;