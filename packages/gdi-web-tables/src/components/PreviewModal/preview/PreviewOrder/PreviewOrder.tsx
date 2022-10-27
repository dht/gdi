import React from 'react';
import { Container } from './PreviewOrder.style';

export type PreviewOrderProps = {};

export function PreviewOrder(_props: PreviewOrderProps) {
    return (
        <Container className="PreviewOrder-container" data-testid="PreviewOrder-container">
            PreviewOrder
        </Container>
    );
}

export default PreviewOrder;
