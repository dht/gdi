import React from 'react';
import { Container } from './VoiceTop.style';
import Logo from '../Logo/Logo';

export type VoiceTopProps = {};

export function VoiceTop(_props: VoiceTopProps) {
    return (
        <Container
            className='VoiceTop-container'
            data-testid='VoiceTop-container'
        >
            <Logo />
        </Container>
    );
}

export default VoiceTop;
