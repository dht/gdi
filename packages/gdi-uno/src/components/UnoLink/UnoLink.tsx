import React from 'react';
import { Wrapper } from './UnoLink.style';

export type UnoLinkProps = {
    children: string;
    href: string;
    iconName?: string;
};

export function UnoLink(props: UnoLinkProps) {
    const { href, iconName } = props;

    return (
        <Wrapper
            href={href}
            target='_blank'
            className='UnoLink-wrapper'
            data-testid='UnoLink-wrapper'
        >
            <i className='material-icons'>{iconName}</i>
            {props.children}
        </Wrapper>
    );
}

export default UnoLink;
