import React from 'react';
import { Container } from './ItemEvent.style';

export type ItemEventProps = {};

export function ItemEvent(_props: ItemEventProps) {
    return (
        <Container className="ItemEvent-container" data-testid="ItemEvent-container">
            ItemEvent
        </Container>
    );
}

export default ItemEvent;
