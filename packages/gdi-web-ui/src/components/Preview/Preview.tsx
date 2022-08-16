import React from 'react';
import { Container } from './Preview.style';

export type PreviewProps = {};

export function Preview(_props: PreviewProps) {
    return (
        <Container className="Preview-container" data-testid="Preview-container">
            Preview
        </Container>
    );
}

export default Preview;
