import React from 'react';
import { Wrapper } from './TubeVideo.style';

export type TubeVideoProps = {};

export function TubeVideo(_props: TubeVideoProps) {
    return (
        <Wrapper className="TubeVideo-wrapper" data-testid="TubeVideo-wrapper">
            TubeVideo
        </Wrapper>
    );
}

export default TubeVideo;
