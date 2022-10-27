import React from 'react';
import { Container } from './ItemProject.style';

export type ItemProjectProps = {};

export function ItemProject(_props: ItemProjectProps) {
    return (
        <Container className="ItemProject-container" data-testid="ItemProject-container">
            ItemProject
        </Container>
    );
}

export default ItemProject;
