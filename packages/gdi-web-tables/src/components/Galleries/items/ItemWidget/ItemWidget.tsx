import React from 'react';
import { Container } from './ItemWidget.style';

export type ItemWidgetProps = {};

export function ItemWidget(_props: ItemWidgetProps) {
    return (
        <Container className="ItemWidget-container" data-testid="ItemWidget-container">
            ItemWidget
        </Container>
    );
}

export default ItemWidget;
