import React from 'react';
import { Wrapper } from './PreviewPost.style';

export type PreviewPostProps = {};

export function PreviewPost(_props: PreviewPostProps) {
    return (
        <Wrapper
            className='PreviewPost-wrapper'
            data-testid='PreviewPost-wrapper'
        >
            PreviewPost
        </Wrapper>
    );
}

export default PreviewPost;
