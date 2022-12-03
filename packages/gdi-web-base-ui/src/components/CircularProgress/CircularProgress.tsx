import React from 'react';
import { Wrapper, Spinner } from './CircularProgress.style';

export type CircularProgressProps = {
    color?: string;
};

export function CircularProgress(props: CircularProgressProps) {
    const { color } = props;

    return (
        <Wrapper color={color}>
            <Spinner className='spinner' />
            <Spinner className='spinner' />
            <Spinner className='spinner' />
        </Wrapper>
    );
}

export default CircularProgress;
