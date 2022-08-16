import React from 'react';
import { Container } from './ItemPost.style';

export type ItemPostProps = {};

export function ItemPost(_props: ItemPostProps) {
    return (
        <Container className="ItemPost-container" data-testid="ItemPost-container">
            ItemPost
        </Container>
    );
}

export default ItemPost;
