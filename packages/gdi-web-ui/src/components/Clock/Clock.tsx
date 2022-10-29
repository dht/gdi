import React, { useState } from 'react';
import { Container, Hours, Divider, Minutes, Digit, AmPm } from './Clock.style';
import { useInterval, useMount } from 'react-use';
import { useLanguage } from '@gdi/language';

export type ClockProps = {
    timeDeltaInMinutes?: number;
};

type Time = {
    hours: string;
    minutes: string;
    amPm?: string;
};

export function Clock(props: ClockProps) {
    const { h } = useLanguage();
    const { timeDeltaInMinutes = 0 } = props;
    const [time, setTime] = useState<Time>({ hours: 0, minutes: 0 });

    const updateClock = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + timeDeltaInMinutes);

        const timeStr = h.time(now);
        const parts = timeStr.split(/:|\s/g);

        setTime({
            hours: parts[0],
            minutes: parts[1],
            amPm: parts[2],
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
            <Hours>{time.hours}</Hours>
            <Divider>:</Divider>
            <Minutes>{lz(time.minutes)}</Minutes>
            {time.amPm && <AmPm>{time.amPm}</AmPm>}
        </Container>
    );
}

const lz = (str: string | number) =>
    String(str).length === 1 ? '0' + str : str;

export default Clock;
