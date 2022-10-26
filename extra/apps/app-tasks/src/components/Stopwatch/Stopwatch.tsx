import React from 'react';
import { Container, Seconds, TimeBig, Unit } from './Stopwatch.style';
import { lz } from '../../utils/numbers';

export type StopwatchProps = {
    duration?: CompactDuration;
};

export function Stopwatch(props: StopwatchProps) {
    const { duration } = props;
    const { hours = 0, minutes = 0, seconds = 0 } = duration ?? {};

    function renderHours() {
        if (!hours) {
            return null;
        }

        return (
            <>
                <TimeBig>{hours}</TimeBig>
                <Unit>h</Unit>
            </>
        );
    }

    return (
        <Container
            className='Stopwatch-container'
            data-testid='Stopwatch-container'
        >
            {renderHours()}
            <TimeBig>{minutes}</TimeBig>
            <Unit>m</Unit>
            <Seconds>{lz(seconds)}</Seconds>
            <Unit>s</Unit>
        </Container>
    );
}

export default Stopwatch;
