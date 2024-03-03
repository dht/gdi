import React from 'react';
import { Wrapper } from './CalendarHeader.style';

export type CalendarHeaderProps = {};

export function CalendarHeader(_props: CalendarHeaderProps) {
    return (
        <Wrapper className="CalendarHeader-wrapper" data-testid="CalendarHeader-wrapper">
            CalendarHeader
        </Wrapper>
    );
}

export default CalendarHeader;
