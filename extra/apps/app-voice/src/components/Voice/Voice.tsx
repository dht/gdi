import React from 'react';
import { Container } from './Voice.style';

export type VoiceProps = {};

export function Voice(_props: VoiceProps) {
    return (
        <Container
            className='Voice-container'
            data-testid='Voice-container'
        ></Container>
    );
}

export default Voice;
