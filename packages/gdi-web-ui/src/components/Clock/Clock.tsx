import React, { useState } from 'react';
import { Container, Hours, Divider, Minutes, Digit } from './Clock.style';
import { useInterval, useMount } from 'react-use';

export type ClockProps = {
    timeDeltaInMinutes?: number;
};

type Time = {
    hours: number;
    minutes: number;
};

export function Clock(props: ClockProps) {
    const { timeDeltaInMinutes = 0 } = props;
    const [time, setTime] = useState<Time>({ hours: 0, minutes: 0 });

    const updateClock = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + timeDeltaInMinutes);
        setTime({
            hours: now.getHours(),
            minutes: now.getMinutes(),
        });
    };

    useMount(() => {
        updateClock();
    });

    useInterval(() => {
        updateClock();
    }, 300);

    return (
        <Container className='Clock-container' data-testid='Clock-container'>
            <Hours>{lz(time.hours)}</Hours>
            <Divider>:</Divider>
            <Minutes>{lz(time.minutes)}</Minutes>
        </Container>
    );
}

const lz = (str: string | number) =>
    String(str).length === 1 ? '0' + str : str;

export default Clock;
