import React from 'react';
import { Container } from './UnoButton.style';

export type UnoButtonProps = {
    children: string;
    href: string;
};

export function UnoButton(props: UnoButtonProps) {
    const { href } = props;

    return (
        <Container
            className='UnoButton-container'
            data-testid='UnoButton-container'
            href={href}
            target='_blank'
        >
            {props.children}
        </Container>
    );
}

export default UnoButton;
