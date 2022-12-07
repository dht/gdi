import React from 'react';
import { Wrapper } from './Logo.style';

export type LogoProps = {
    url: string;
    onClick?: () => void;
};

export function Logo(props: LogoProps) {
    const { url } = props;

    return (
        <Wrapper className='Logo-container' onClick={props.onClick}>
            <img draggable={false} className='logo' src={url} alt='logo' />
        </Wrapper>
    );
}

export default Logo;
