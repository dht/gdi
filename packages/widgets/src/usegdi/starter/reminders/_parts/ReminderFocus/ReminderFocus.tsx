import React from 'react';
import { Wrapper } from './ReminderFocus.style';

export type ReminderFocusProps = {};

export function ReminderFocus(_props: ReminderFocusProps) {
    return (
        <Wrapper className="ReminderFocus-wrapper" data-testid="ReminderFocus-wrapper">
            ReminderFocus
        </Wrapper>
    );
}

export default ReminderFocus;
