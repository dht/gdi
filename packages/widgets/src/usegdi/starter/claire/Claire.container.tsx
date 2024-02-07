import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Claire } from './Claire';

export type ClaireContainerProps = {};

export function ClaireContainer(_props: ClaireContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Claire />;
}

export default ClaireContainer;
