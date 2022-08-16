import React from 'react';
import { Container } from './ItemPerson.style';

export type ItemPersonProps = {};

export function ItemPerson(_props: ItemPersonProps) {
    return (
        <Container className="ItemPerson-container" data-testid="ItemPerson-container">
            ItemPerson
        </Container>
    );
}

export default ItemPerson;
