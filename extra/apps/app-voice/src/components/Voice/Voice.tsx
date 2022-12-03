import React from 'react';
import { Wrapper } from './Voice.style';

export type VoiceProps = {};

export function Voice(_props: VoiceProps) {
    return (
        <Wrapper
            className='Voice-wrapper'
            data-testid='Voice-wrapper'
        ></Wrapper>
    );
}

export default Voice;
