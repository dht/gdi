import React from 'react';
import { Container } from './UnoLink.style';

export type UnoLinkProps = {
    children: string;
    href: string;
    iconName?: string;
};

export function UnoLink(props: UnoLinkProps) {
    const { href, iconName } = props;

    return (
        <Container
            href={href}
            target='_blank'
            className='UnoLink-container'
            data-testid='UnoLink-container'
        >
            <i className='material-icons'>{iconName}</i>
            {props.children}
        </Container>
    );
}

export default UnoLink;
