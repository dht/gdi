import React from 'react';
import { Container } from './PreviewSale.style';

export type PreviewSaleProps = {};

export function PreviewSale(_props: PreviewSaleProps) {
    return (
        <Container className="PreviewSale-container" data-testid="PreviewSale-container">
            PreviewSale
        </Container>
    );
}

export default PreviewSale;
