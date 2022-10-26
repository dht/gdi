import React from 'react';
import { Container, TimeBig, Units } from './Duration.style';
import { intervalToDuration } from '@gdi/language';
import classnames from 'classnames';

export type DurationProps = {
    minutes: number;
    className?: string;
};

export function Duration(props: DurationProps) {
    const d = intervalToDuration({
        start: 0,
        end: props.minutes * 60 * 1000,
    });

    const { days = 0, hours = 0, minutes = 0 } = d;

    function renderDays() {
        if (!days) {
            return null;
        }

        return (
            <>
                <TimeBig>{days}</TimeBig>
                <Units>d</Units>
            </>
        );
    }

    function renderHours() {
        if (!hours) {
            return null;
        }

        return (
            <>
                <TimeBig>{hours}</TimeBig>
                <Units>h</Units>
            </>
        );
    }

    const className = classnames('Duration-container', props.className);

    return (
        <Container className={className} data-testid='Duration-container'>
            {renderDays()}
            {renderHours()}
            <TimeBig>{minutes}</TimeBig>
            <Units>m</Units>
        </Container>
    );
}

export default Duration;
