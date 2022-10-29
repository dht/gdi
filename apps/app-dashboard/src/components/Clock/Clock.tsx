import React from 'react';
import { Container, Today } from './Clock.style';
import { Clock as ClockUI } from '@gdi/web-ui';
import { useLanguage } from '@gdi/language';

export type ClockProps = {};

const now = new Date();

export function Clock(_props: ClockProps) {
    const { d } = useLanguage();

    return (
        <Container className='Clock-container' data-testid='Clock-container'>
            <Today>{d.dateLong(now)}</Today>
            <ClockUI />
        </Container>
    );
}

export default Clock;
