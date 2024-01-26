import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { YoutubeLayer } from './YoutubeLayer';

export type YoutubeLayerContainerProps = {};

export function YoutubeLayerContainer(_props: YoutubeLayerContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <YoutubeLayer />;
}

export default YoutubeLayerContainer;
