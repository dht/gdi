import React from 'react';
import { Wrapper } from './Menu.style';

export type MenuProps = {};

export function Menu(_props: MenuProps) {
    return (
        <Wrapper className='Menu-wrapper' data-testid='Menu-wrapper'>
            Menu
        </Wrapper>
    );
}

export default Menu;
