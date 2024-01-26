import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { VideoLibrary } from './VideoLibrary';

export type VideoLibraryContainerProps = {};

export function VideoLibraryContainer(_props: VideoLibraryContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <VideoLibrary />;
}

export default VideoLibraryContainer;
