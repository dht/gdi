import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ListFocus } from './ListFocus';

export type ListFocusContainerProps = {};

export function ListFocusContainer(_props: ListFocusContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <ListFocus />;
}

export default ListFocusContainer;
