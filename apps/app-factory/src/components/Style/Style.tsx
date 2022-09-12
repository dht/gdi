import React from 'react';
import { Container } from './Style.style';

export type StyleProps = {};

export function Style(_props: StyleProps) {
    return (
        <Container className="Style-container" data-testid="Style-container">
            Style
        </Container>
    );
}

export default Style;
