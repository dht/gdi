import React from 'react';
import { Wrapper } from './ConsoleLogs.style';

export type ConsoleLogsProps = {};

export function ConsoleLogs(_props: ConsoleLogsProps) {
    return (
        <Wrapper
            className='ConsoleLogs-wrapper'
            data-testid='ConsoleLogs-wrapper'
        >
            ConsoleLogs
        </Wrapper>
    );
}

export default ConsoleLogs;
