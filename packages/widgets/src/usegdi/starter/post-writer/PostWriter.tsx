import React from 'react';
import { Wrapper } from './PostWriter.style';

export type PostWriterProps = {};

export function PostWriter(_props: PostWriterProps) {
    return (
        <Wrapper className="PostWriter-wrapper" data-testid="PostWriter-wrapper">
            PostWriter
        </Wrapper>
    );
}

export default PostWriter;
