import React from 'react';
import { Container } from './Sort.style';

export type SortProps = {};

export function Sort(_props: SortProps) {
    return (
        <Container className="Sort-container" data-testid="Sort-container">
            Sort
        </Container>
    );
}

export default Sort;
