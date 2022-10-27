import React from 'react';
import { Container } from './PreviewLayout.style';

export type PreviewLayoutProps = {};

export function PreviewLayout(_props: PreviewLayoutProps) {
    return (
        <Container className="PreviewLayout-container" data-testid="PreviewLayout-container">
            PreviewLayout
        </Container>
    );
}

export default PreviewLayout;
