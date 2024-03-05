import React from 'react';
import { Wrapper } from './ContactsSummary.style';

export type ContactsSummaryProps = {};

export function ContactsSummary(_props: ContactsSummaryProps) {
    return (
        <Wrapper className="ContactsSummary-wrapper" data-testid="ContactsSummary-wrapper">
            ContactsSummary
        </Wrapper>
    );
}

export default ContactsSummary;
