import React from 'react';
import { Wrapper } from './CalendarFocus.style';

export type CalendarFocusProps = {};

export function CalendarFocus(_props: CalendarFocusProps) {
    return (
        <Wrapper className="CalendarFocus-wrapper" data-testid="CalendarFocus-wrapper">
            CalendarFocus
        </Wrapper>
    );
}

export default CalendarFocus;
