import React from 'react';
import {
    Container,
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
        <Container
            className='DomainPanel-container'
            data-testid='DomainPanel-container'
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
        </Container>
    );
}

export default DomainPanel;
