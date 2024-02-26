import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxRelated } from './MuxRelated';

export type MuxRelatedContainerProps = {};

export function MuxRelatedContainer(_props: MuxRelatedContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxRelated />;
}

export default MuxRelatedContainer;
