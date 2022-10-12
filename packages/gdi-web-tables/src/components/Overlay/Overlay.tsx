import React from 'react';
import { Container } from './Overlay.style';

export type OverlayProps = {};

export function Overlay(_props: OverlayProps) {
    return (
        <Container className="Overlay-container" data-testid="Overlay-container">
            Overlay
        </Container>
    );
}

export default Overlay;
