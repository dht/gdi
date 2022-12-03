import React from 'react';
import { Wrapper } from './PreviewComment.style';

export type PreviewCommentProps = {};

export function PreviewComment(_props: PreviewCommentProps) {
    return (
        <Wrapper
            className='PreviewComment-wrapper'
            data-testid='PreviewComment-wrapper'
        >
            PreviewComment
        </Wrapper>
    );
}

export default PreviewComment;
