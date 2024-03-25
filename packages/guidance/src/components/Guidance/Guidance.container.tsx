import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Guidance } from './Guidance';

export type GuidanceContainerProps = {};

export function GuidanceContainer(_props: GuidanceContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Guidance />;
}

export default GuidanceContainer;
