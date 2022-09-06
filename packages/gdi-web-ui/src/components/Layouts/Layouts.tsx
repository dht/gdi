import React from 'react';
import { Container } from './Layouts.style';

export type LayoutsProps = {};

export function Layouts(_props: LayoutsProps) {
    return (
        <Container className="Layouts-container" data-testid="Layouts-container">
            Layouts
        </Container>
    );
}

export default Layouts;
