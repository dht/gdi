import React from 'react';
import { Container } from './PreviewPageInstance.style';

export type PreviewPageInstanceProps = {};

export function PreviewPageInstance(_props: PreviewPageInstanceProps) {
    return (
        <Container className="PreviewPageInstance-container" data-testid="PreviewPageInstance-container">
            PreviewPageInstance
        </Container>
    );
}

export default PreviewPageInstance;
