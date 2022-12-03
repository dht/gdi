import React from 'react';
import { Wrapper } from './VoiceTop.style';
import Logo from '../Logo/Logo';

export type VoiceTopProps = {};

export function VoiceTop(_props: VoiceTopProps) {
    return (
        <Wrapper className='VoiceTop-wrapper' data-testid='VoiceTop-wrapper'>
            <Logo />
        </Wrapper>
    );
}

export default VoiceTop;
