import React from 'react';
import { Container } from './ItemOrder.style';

export type ItemOrderProps = {};

export function ItemOrder(_props: ItemOrderProps) {
    return (
        <Container className="ItemOrder-container" data-testid="ItemOrder-container">
            ItemOrder
        </Container>
    );
}

export default ItemOrder;
