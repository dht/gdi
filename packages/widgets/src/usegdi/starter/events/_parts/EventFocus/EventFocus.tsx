import React from 'react';
import { Wrapper } from './EventFocus.style';

export type EventFocusProps = {};

export function EventFocus(_props: EventFocusProps) {
    return (
        <Wrapper className="EventFocus-wrapper" data-testid="EventFocus-wrapper">
            EventFocus
        </Wrapper>
    );
}

export default EventFocus;
