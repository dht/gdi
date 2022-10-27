import React from 'react';
import { Container } from './ItemInbox.style';

export type ItemInboxProps = {};

export function ItemInbox(_props: ItemInboxProps) {
    return (
        <Container className="ItemInbox-container" data-testid="ItemInbox-container">
            ItemInbox
        </Container>
    );
}

export default ItemInbox;
