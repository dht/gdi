import React from 'react';
import { Container } from './PreviewPost.style';

export type PreviewPostProps = {};

export function PreviewPost(_props: PreviewPostProps) {
    return (
        <Container className="PreviewPost-container" data-testid="PreviewPost-container">
            PreviewPost
        </Container>
    );
}

export default PreviewPost;
