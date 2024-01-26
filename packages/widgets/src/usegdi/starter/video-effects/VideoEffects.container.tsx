import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { VideoEffects } from './VideoEffects';

export type VideoEffectsContainerProps = {};

export function VideoEffectsContainer(_props: VideoEffectsContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <VideoEffects />;
}

export default VideoEffectsContainer;
