import React from 'react';
import { Container } from './Logo.style';

export type LogoProps = {
    url: string;
};

export function Logo(props: LogoProps) {
    const { url } = props;

    return (
        <Container className='Logo-container' onClick={props.onClick}>
            <img draggable={false} className='logo' src={url} alt='logo' />
        </Container>
    );
}

export default Logo;
