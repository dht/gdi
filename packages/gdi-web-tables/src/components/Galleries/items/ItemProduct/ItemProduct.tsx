import React from 'react';
import { Container } from './ItemProduct.style';

export type ItemProductProps = {};

export function ItemProduct(_props: ItemProductProps) {
    return (
        <Container className="ItemProduct-container" data-testid="ItemProduct-container">
            ItemProduct
        </Container>
    );
}

export default ItemProduct;
