import React from 'react';
import { Wrapper } from './Reminders.style';

export type RemindersProps = {};

export function Reminders(_props: RemindersProps) {
    return (
        <Wrapper className="Reminders-wrapper" data-testid="Reminders-wrapper">
            Reminders
        </Wrapper>
    );
}

export default Reminders;
