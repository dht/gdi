import React from 'react';
import { Wrapper, Image } from './Logo.style';

export type LogoProps = {
    height?: number;
};

export function Logo(props: LogoProps) {
    const { height = 50 } = props;

    return (
        <Wrapper className='Logo-wrapper' data-testid='Logo-wrapper'>
            <Image height={height} src='/logo.svg' />
        </Wrapper>
    );
}

export default Logo;
