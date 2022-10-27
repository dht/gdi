import React from 'react';
import { Container } from './PreviewTemplate.style';

export type PreviewTemplateProps = {};

export function PreviewTemplate(_props: PreviewTemplateProps) {
    return (
        <Container className="PreviewTemplate-container" data-testid="PreviewTemplate-container">
            PreviewTemplate
        </Container>
    );
}

export default PreviewTemplate;
