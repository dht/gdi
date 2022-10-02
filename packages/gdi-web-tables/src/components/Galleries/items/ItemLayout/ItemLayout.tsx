import React from 'react';
import { Container } from './ItemLayout.style';

export type ItemLayoutProps = {};

export function ItemLayout(_props: ItemLayoutProps) {
    return (
        <Container className="ItemLayout-container" data-testid="ItemLayout-container">
            ItemLayout
        </Container>
    );
}

export default ItemLayout;
