import React from 'react';
import { Container } from './PreviewProduct.style';

export type PreviewProductProps = {};

export function PreviewProduct(_props: PreviewProductProps) {
    return (
        <Container className="PreviewProduct-container" data-testid="PreviewProduct-container">
            PreviewProduct
        </Container>
    );
}

export default PreviewProduct;
