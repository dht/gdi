import React from 'react';
import { Container } from './PreviewWidget.style';

export type PreviewWidgetProps = {};

export function PreviewWidget(_props: PreviewWidgetProps) {
    return (
        <Container className="PreviewWidget-container" data-testid="PreviewWidget-container">
            PreviewWidget
        </Container>
    );
}

export default PreviewWidget;
