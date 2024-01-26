import React from 'react';
import { Wrapper } from './VideoLibrary.style';

export type VideoLibraryProps = {};

export function VideoLibrary(_props: VideoLibraryProps) {
    return (
        <Wrapper className="VideoLibrary-wrapper" data-testid="VideoLibrary-wrapper">
            VideoLibrary
        </Wrapper>
    );
}

export default VideoLibrary;
