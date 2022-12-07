import React from 'react';
import { Wrapper, TimeBig, Units } from './Duration.style';
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

    const { day = 0, hour = 0, minute = 0 } = d ?? {};

    function renderDays() {
        if (!day) {
            return null;
        }

        return (
            <>
                <TimeBig>{day}</TimeBig>
                <Units>d</Units>
            </>
        );
    }

    function renderHours() {
        if (!hour) {
            return null;
        }

        return (
            <>
                <TimeBig>{hour}</TimeBig>
                <Units>h</Units>
            </>
        );
    }

    const className = classnames('Duration-wrapper', props.className);

    return (
        <Wrapper className={className} data-testid='Duration-wrapper'>
            {renderDays()}
            {renderHours()}
            <TimeBig>{minute}</TimeBig>
            <Units>m</Units>
        </Wrapper>
    );
}

export default Duration;
