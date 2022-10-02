import React from 'react';
import { Container } from './ItemTicket.style';

export type ItemTicketProps = {};

export function ItemTicket(_props: ItemTicketProps) {
    return (
        <Container className="ItemTicket-container" data-testid="ItemTicket-container">
            ItemTicket
        </Container>
    );
}

export default ItemTicket;
