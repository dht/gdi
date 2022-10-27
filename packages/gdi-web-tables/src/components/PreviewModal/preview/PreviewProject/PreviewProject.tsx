import React from 'react';
import { Container } from './PreviewProject.style';

export type PreviewProjectProps = {};

export function PreviewProject(_props: PreviewProjectProps) {
    return (
        <Container className="PreviewProject-container" data-testid="PreviewProject-container">
            PreviewProject
        </Container>
    );
}

export default PreviewProject;
