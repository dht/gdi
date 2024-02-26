import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxMenu } from './MuxMenu';

export type MuxMenuContainerProps = {};

export function MuxMenuContainer(_props: MuxMenuContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxMenu />;
}

export default MuxMenuContainer;
