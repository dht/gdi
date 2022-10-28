import React from 'react';
import { Container } from './PreviewComment.style';

export type PreviewCommentProps = {};

export function PreviewComment(_props: PreviewCommentProps) {
    return (
        <Container className="PreviewComment-container" data-testid="PreviewComment-container">
            PreviewComment
        </Container>
    );
}

export default PreviewComment;
