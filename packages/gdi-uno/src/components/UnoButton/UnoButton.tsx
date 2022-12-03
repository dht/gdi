import React from 'react';
import { Wrapper } from './UnoButton.style';

export type UnoButtonProps = {
    children: string;
    href: string;
};

export function UnoButton(props: UnoButtonProps) {
    const { href } = props;

    return (
        <Wrapper
            className='UnoButton-wrapper'
            data-testid='UnoButton-wrapper'
            href={href}
            target='_blank'
        >
            {props.children}
        </Wrapper>
    );
}

export default UnoButton;
