import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Premiere } from './Premiere';

export type PremiereContainerProps = {};

export function PremiereContainer(_props: PremiereContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Premiere />;
}

export default PremiereContainer;
