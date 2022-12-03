import React from 'react';
import classnames from 'classnames';
import { Wrapper } from './Logo.style';

export type LogoProps = {
    className?: string;
    small?: boolean;
    onClick?: () => void;
    caps?: string;
};

export function Logo(props: LogoProps) {
    const { small, caps = '' } = props;

    const className = classnames('Logo-wrapper', props.className, {
        small,
        clickable: props.onClick,
    });

    return (
        <Wrapper className={className} onMouseDown={props.onClick}>
            <img
                draggable={false}
                className='logo'
                src='//raw.githubusercontent.com/dht/gdi/main/clients/gdi-admin/public/Logo.webp'
                alt='logo'
            />
            <span className='os'>{caps.toUpperCase()}</span>
        </Wrapper>
    );
}

export default Logo;
