import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { YoutubeLayers } from './YoutubeLayers';

export type YoutubeLayersContainerProps = {};

export function YoutubeLayersContainer(_props: YoutubeLayersContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <YoutubeLayers />;
}

export default YoutubeLayersContainer;
