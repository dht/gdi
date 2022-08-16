import React from 'react';
import { Container, Spinner } from './CircularProgress.style';

export type CircularProgressProps = {};

export function CircularProgress(_props: CircularProgressProps) {
    return (
        <Container>
            <Spinner />
            <Spinner />
            <Spinner />
        </Container>
    );
}

export default CircularProgress;
