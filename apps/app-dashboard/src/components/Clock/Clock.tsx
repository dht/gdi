import React from 'react';
import { Container, Today } from './Clock.style';
import { Clock as ClockUI } from '@gdi/web-ui';

export type ClockProps = {};

export function Clock(_props: ClockProps) {
    return (
        <Container className='Clock-container' data-testid='Clock-container'>
            <ClockUI />
            <Today>Sunday, 12th of April 2020</Today>
        </Container>
    );
}

export default Clock;
