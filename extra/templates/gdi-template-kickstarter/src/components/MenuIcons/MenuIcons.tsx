import React from 'react';
import { Item, Wrapper } from './MenuIcons.style';

export type MenuIconsProps = {};

export function MenuIcons(_props: MenuIconsProps) {
    return (
        <Wrapper className='MenuIcons-wrapper' data-testid='MenuIcons-wrapper'>
            <Item>
                <i className='material-icons'>image</i>
            </Item>
            <Item>
                <i className='material-icons'>tag</i>
            </Item>
        </Wrapper>
    );
}

export default MenuIcons;
