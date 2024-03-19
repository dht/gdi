import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { TodoFocus } from './TodoFocus';

export type TodoFocusContainerProps = {};

export function TodoFocusContainer(_props: TodoFocusContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <TodoFocus />;
}

export default TodoFocusContainer;
