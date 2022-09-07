import React from 'react';
import { Container } from './GridDesigner.style';

export type GridDesignerProps = {};

export function GridDesigner(_props: GridDesignerProps) {
    return (
        <Container className="GridDesigner-container" data-testid="GridDesigner-container">
            GridDesigner
        </Container>
    );
}

export default GridDesigner;
