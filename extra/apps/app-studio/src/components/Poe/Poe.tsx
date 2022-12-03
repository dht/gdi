import React from 'react';
import {
    Wrapper,
    Ear,
    ContextLine,
    Domain,
    SignalLine,
    Listening,
    Percent,
} from './Poe.style';

export type PoeProps = {};

export function Poe(_props: PoeProps) {
    const text = '';
    // const text = 'What is the temperature tomorrow?';

    return (
        <Wrapper className='Poe-wrapper' data-testid='Poe-wrapper'>
            <ContextLine>
                <Domain>office</Domain>
                <Domain>freelancer</Domain>
                <Domain>status</Domain>
            </ContextLine>
            <Ear>{text}</Ear>
            <SignalLine>
                <Percent>94%</Percent>
                <Listening />
            </SignalLine>
        </Wrapper>
    );
}

export default Poe;
