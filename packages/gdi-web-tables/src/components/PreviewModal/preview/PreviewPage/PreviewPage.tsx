import React from 'react';
import { Container } from './PreviewPage.style';

export type PreviewPageProps = {};

export function PreviewPage(_props: PreviewPageProps) {
    return (
        <Container className="PreviewPage-container" data-testid="PreviewPage-container">
            PreviewPage
        </Container>
    );
}

export default PreviewPage;
