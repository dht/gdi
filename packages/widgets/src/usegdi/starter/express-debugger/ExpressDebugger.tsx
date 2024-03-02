import React from 'react';
import { Wrapper } from './ExpressDebugger.style';

export type ExpressDebuggerProps = {};

export function ExpressDebugger(_props: ExpressDebuggerProps) {
    return (
        <Wrapper className="ExpressDebugger-wrapper" data-testid="ExpressDebugger-wrapper">
            ExpressDebugger
        </Wrapper>
    );
}

export default ExpressDebugger;
