import React from 'react';
import Logo from '../Logo/LogoSchedule';
import { Wrapper } from './ScheduleTop.style';

export type ScheduleTopProps = {};

export function ScheduleTop(_props: ScheduleTopProps) {
    return (
        <Wrapper
            className='ScheduleTop-wrapper'
            data-testid='ScheduleTop-wrapper'
        >
            <Logo />
        </Wrapper>
    );
}

export default ScheduleTop;
