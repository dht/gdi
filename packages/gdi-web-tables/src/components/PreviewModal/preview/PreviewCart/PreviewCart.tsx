import React from 'react';
import { Container } from './PreviewCart.style';

export type PreviewCartProps = {};

export function PreviewCart(_props: PreviewCartProps) {
    return (
        <Container className="PreviewCart-container" data-testid="PreviewCart-container">
            PreviewCart
        </Container>
    );
}

export default PreviewCart;
