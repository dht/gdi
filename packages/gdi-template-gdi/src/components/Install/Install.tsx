import React, { useEffect, useRef } from 'react';
import { Container, Inner, Typewriter } from './Install.style';

export type InstallProps = {
    installation?: string;
};

export function Install(props: InstallProps) {
    const { installation = '' } = props;

    return (
        <Container
            className='Install-container'
            data-testid='Install-container'
        >
            <Inner>
                <Typewriter length={installation.length}>
                    {installation}
                </Typewriter>
            </Inner>
        </Container>
    );
}

export default Install;
