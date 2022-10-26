import React from 'react';
import { Container } from './Refresh.style';

export type RefreshProps = {};

export function Refresh(_props: RefreshProps) {
    return (
        <Container className="Refresh-container" data-testid="Refresh-container">
            Refresh
        </Container>
    );
}

export default Refresh;
