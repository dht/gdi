import React from 'react';
import { H1, Wrapper } from './Header.style';

export type HeaderProps = {
    text: string;
};

export function Header(props: HeaderProps) {
    const { text } = props;

    return (
        <Wrapper className='Header-wrapper' data-testid='Header-wrapper'>
            <H1>{text}</H1>
        </Wrapper>
    );
}

export default Header;
