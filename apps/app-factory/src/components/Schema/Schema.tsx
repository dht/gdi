import React from 'react';
import { Container } from './Schema.style';

export type SchemaProps = {};

export function Schema(_props: SchemaProps) {
    return (
        <Container className="Schema-container" data-testid="Schema-container">
            Schema
        </Container>
    );
}

export default Schema;
