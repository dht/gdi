import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Periscope } from './Periscope';

export type PeriscopeContainerProps = {};

export function PeriscopeContainer(_props: PeriscopeContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Periscope />;
}

export default PeriscopeContainer;
