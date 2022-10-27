import React from 'react';
import { Container } from './PreviewEvent.style';

export type PreviewEventProps = {};

export function PreviewEvent(_props: PreviewEventProps) {
    return (
        <Container className="PreviewEvent-container" data-testid="PreviewEvent-container">
            PreviewEvent
        </Container>
    );
}

export default PreviewEvent;
