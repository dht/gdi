import React from 'react';
import { Container } from './Wrapper.style';

export type WrapperProps = {};

export function Wrapper(_props: WrapperProps) {
    return (
        <Container className="Wrapper-container" data-testid="Wrapper-container">
            Wrapper
        </Container>
    );
}

export default Wrapper;
