import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { FinanceFocus } from './FinanceFocus';

export type FinanceFocusContainerProps = {};

export function FinanceFocusContainer(_props: FinanceFocusContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <FinanceFocus />;
}

export default FinanceFocusContainer;
