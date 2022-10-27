import React from 'react';
import { Container } from './ItemPageInstance.style';

export type ItemPageInstanceProps = {};

export function ItemPageInstance(_props: ItemPageInstanceProps) {
    return (
        <Container className="ItemPageInstance-container" data-testid="ItemPageInstance-container">
            ItemPageInstance
        </Container>
    );
}

export default ItemPageInstance;
