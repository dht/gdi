import React from 'react';
import { Container } from './ItemCart.style';

export type ItemCartProps = {};

export function ItemCart(_props: ItemCartProps) {
    return (
        <Container className="ItemCart-container" data-testid="ItemCart-container">
            ItemCart
        </Container>
    );
}

export default ItemCart;
