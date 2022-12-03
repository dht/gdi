import React from 'react';
import { Wrapper, Seconds, TimeBig, Unit } from './Stopwatch.style';
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
        <Wrapper className='Stopwatch-wrapper' data-testid='Stopwatch-wrapper'>
            {renderHours()}
            <TimeBig>{minutes}</TimeBig>
            <Unit>m</Unit>
            <Seconds>{lz(seconds)}</Seconds>
            <Unit>s</Unit>
        </Wrapper>
    );
}

export default Stopwatch;
