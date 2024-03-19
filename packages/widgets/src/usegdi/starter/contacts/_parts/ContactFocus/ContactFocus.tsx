import React from 'react';
import { Wrapper } from './ContactFocus.style';

export type ContactFocusProps = {};

export function ContactFocus(_props: ContactFocusProps) {
    return (
        <Wrapper className="ContactFocus-wrapper" data-testid="ContactFocus-wrapper">
            ContactFocus
        </Wrapper>
    );
}

export default ContactFocus;
