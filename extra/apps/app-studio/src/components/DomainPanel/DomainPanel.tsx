import React from 'react';
import {
    Wrapper,
    Ear,
    ContextLine,
    Domain,
    SignalLine,
    Listening,
    Percent,
} from './DomainPanel.style';
export type DomainPanelProps = {};

export function DomainPanel(_props: DomainPanelProps) {
    return (
        <Wrapper
            className='DomainPanel-wrapper'
            data-testid='DomainPanel-wrapper'
        >
            <ContextLine>
                <Domain>office</Domain>
                <Domain>outsourcing</Domain>
                <Domain>fiverr</Domain>
            </ContextLine>
            <Ear>
                Jay25 has just completed your new company letterhead design
            </Ear>
            <SignalLine>
                <Percent>94%</Percent>
                <Listening />
            </SignalLine>
        </Wrapper>
    );
}

export default DomainPanel;
