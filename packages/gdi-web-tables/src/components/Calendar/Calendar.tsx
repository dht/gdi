import React from 'react';
import { Container } from './Calendar.style';

export type CalendarProps = {};

export function Calendar(_props: CalendarProps) {
    return (
        <Container className="Calendar-container" data-testid="Calendar-container">
            Calendar
        </Container>
    );
}

export default Calendar;
