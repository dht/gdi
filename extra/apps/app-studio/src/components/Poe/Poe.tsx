import React from 'react';
import {
    Container,
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
        <Container className='Poe-container' data-testid='Poe-container'>
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
        </Container>
    );
}

export default Poe;
