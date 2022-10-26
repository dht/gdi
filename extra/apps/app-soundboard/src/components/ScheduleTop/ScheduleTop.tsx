import React from 'react';
import Logo from '../Logo/LogoSchedule';
import { Container } from './ScheduleTop.style';

export type ScheduleTopProps = {};

export function ScheduleTop(_props: ScheduleTopProps) {
    return (
        <Container
            className='ScheduleTop-container'
            data-testid='ScheduleTop-container'
        >
            <Logo />
        </Container>
    );
}

export default ScheduleTop;
