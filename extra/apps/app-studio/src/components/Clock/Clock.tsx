import React from 'react';
import { Wrapper, Today } from './Clock.style';
import { Clock as ClockUI } from '@gdi/web-ui';
import { useLanguage } from '@gdi/language';

export type ClockProps = {};

const now = new Date();

export function Clock(_props: ClockProps) {
    const { d } = useLanguage();

    return (
        <Wrapper className='Clock-wrapper' data-testid='Clock-wrapper'>
            <Today>{d.dateLong(now)}</Today>
            <ClockUI />
        </Wrapper>
    );
}

export default Clock;
