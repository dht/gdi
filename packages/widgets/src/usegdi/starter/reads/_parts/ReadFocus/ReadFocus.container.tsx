import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ReadFocus } from './ReadFocus';

export type ReadFocusContainerProps = {};

export function ReadFocusContainer(_props: ReadFocusContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <ReadFocus />;
}

export default ReadFocusContainer;
