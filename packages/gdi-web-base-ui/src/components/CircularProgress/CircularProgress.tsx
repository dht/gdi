import React from 'react';
import { Container, Spinner } from './CircularProgress.style';

export type CircularProgressProps = {
    color: string;
};

export function CircularProgress(props: CircularProgressProps) {
    const { color } = props;

    return (
        <Container color={color}>
            <Spinner className='spinner' />
            <Spinner className='spinner' />
            <Spinner className='spinner' />
        </Container>
    );
}

export default CircularProgress;
