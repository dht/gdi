import React, { useEffect, useRef } from 'react';
import { Wrapper, Inner, Typewriter } from './Install.style';

export type InstallProps = {
    installation?: string;
};

export function Install(props: InstallProps) {
    const { installation = '' } = props;

    return (
        <Wrapper className='Install-wrapper' data-testid='Install-wrapper'>
            <Inner>
                <Typewriter length={installation.length}>
                    {installation}
                </Typewriter>
            </Inner>
        </Wrapper>
    );
}

export default Install;
