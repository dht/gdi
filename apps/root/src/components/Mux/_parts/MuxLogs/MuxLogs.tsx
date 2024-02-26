import React from 'react';
import { Wrapper } from './MuxLogs.style';

export type MuxLogsProps = {};

export function MuxLogs(_props: MuxLogsProps) {
    return (
        <Wrapper className="MuxLogs-wrapper" data-testid="MuxLogs-wrapper">
            MuxLogs
        </Wrapper>
    );
}

export default MuxLogs;
