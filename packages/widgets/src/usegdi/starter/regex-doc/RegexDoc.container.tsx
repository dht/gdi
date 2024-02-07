import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { RegexDoc } from './RegexDoc';

export type RegexDocContainerProps = {};

export function RegexDocContainer(_props: RegexDocContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <RegexDoc />;
}

export default RegexDocContainer;
