import React from 'react';
import { Container } from './Content.style';

export type ContentProps = {};

export function Content(_props: ContentProps) {
    return (
        <Container className="Content-container" data-testid="Content-container">
            Content
        </Container>
    );
}

export default Content;
