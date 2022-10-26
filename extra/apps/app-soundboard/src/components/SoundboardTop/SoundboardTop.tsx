import React from 'react';
import Logo from '../Logo/LogoSoundboard';
import { Container } from './SoundboardTop.style';

export type SoundboardTopProps = {};

export function SoundboardTop(_props: SoundboardTopProps) {
    return (
        <Container
            className='SoundboardTop-container'
            data-testid='SoundboardTop-container'
        >
            <Logo />
        </Container>
    );
}

export default SoundboardTop;
