import React from 'react';
import Logo from '../Logo/LogoSoundboard';
import { Wrapper } from './SoundboardTop.style';

export type SoundboardTopProps = {};

export function SoundboardTop(_props: SoundboardTopProps) {
    return (
        <Wrapper
            className='SoundboardTop-wrapper'
            data-testid='SoundboardTop-wrapper'
        >
            <Logo />
        </Wrapper>
    );
}

export default SoundboardTop;
