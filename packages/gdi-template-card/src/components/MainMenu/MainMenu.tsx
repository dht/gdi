import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import { Wrapper } from './MainMenu.style';

export type MainMenuProps = {};

export function MainMenu(_props: MainMenuProps) {
    return (
        <Wrapper className='MainMenu-wrapper' data-testid='MainMenu-wrapper'>
            <MenuButton title='facebook' iconName='facebook' />
            <MenuButton title='linkedin' iconName='linkedIn' />
            <MenuButton title='Whatsapp' iconName='whatsapp' />
            <MenuButton title='instagram' iconName='instagram' />
            <MenuButton title='waze' iconName='drive' />
            <MenuButton title='email' iconName='email' />
            <MenuButton title='homepage' iconName='home' />
        </Wrapper>
    );
}

export default MainMenu;
