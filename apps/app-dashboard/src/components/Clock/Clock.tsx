import React from 'react';
import { Container, Today } from './Clock.style';
import { Clock as ClockUI } from '@gdi/web-ui';
import { format } from '@gdi/language';

export type ClockProps = {};

export function Clock(_props: ClockProps) {
    return (
        <Container className='Clock-container' data-testid='Clock-container'>
            <Today>{format('full')}</Today>
            <ClockUI />
        </Container>
    );
}

export default Clock;
