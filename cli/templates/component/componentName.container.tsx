import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { $CMP } from './$CMP';

export type $CMPContainerProps = {};

export function $CMPContainer(_props: $CMPContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <$CMP />;
}

export default $CMPContainer;
