import React from 'react';
import { Container } from './FlowDesigner.style';

export type FlowDesignerProps = {};

export function FlowDesigner(_props: FlowDesignerProps) {
    return (
        <Container className="FlowDesigner-container" data-testid="FlowDesigner-container">
            FlowDesigner
        </Container>
    );
}

export default FlowDesigner;
