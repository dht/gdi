import React from 'react';
import { Wrapper } from './Calendar.style';

export type CalendarProps = {};

export function Calendar(_props: CalendarProps) {
    return (
        <Wrapper className='Calendar-wrapper' data-testid='Calendar-wrapper'>
            Calendar
        </Wrapper>
    );
}

export default Calendar;
