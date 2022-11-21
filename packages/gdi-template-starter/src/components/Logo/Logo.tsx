import React from 'react';
import classnames from 'classnames';
import { Container } from './Logo.style';

export type LogoProps = {
    className?: string;
    small?: boolean;
    onClick?: () => void;
    caps?: string;
};

export function Logo(props: LogoProps) {
    const { small, caps = '' } = props;

    const className = classnames('Logo-container', props.className, {
        small,
        clickable: props.onClick,
    });

    return (
        <Container className={className} onClick={props.onClick}>
            <img
                draggable={false}
                className='logo'
                src='//raw.githubusercontent.com/dht/gdi/main/clients/gdi-admin/public/Logo.webp'
                alt='logo'
            />
            <span className='os'>{caps.toUpperCase()}</span>
        </Container>
    );
}

export default Logo;
