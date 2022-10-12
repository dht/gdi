import React from 'react';
import { Container } from './OverlayField.style';

export type OverlayFieldProps = {};

export function OverlayField(_props: OverlayFieldProps) {
    return (
        <Container className="OverlayField-container" data-testid="OverlayField-container">
            OverlayField
        </Container>
    );
}

export default OverlayField;
