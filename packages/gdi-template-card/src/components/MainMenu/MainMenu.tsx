import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import { Container } from './MainMenu.style';

export type MainMenuProps = {};

export function MainMenu(_props: MainMenuProps) {
    return (
        <Container
            className='MainMenu-container'
            data-testid='MainMenu-container'
        >
            <MenuButton title='facebook' iconName='facebook' />
            <MenuButton title='linkedin' iconName='linkedIn' />
            <MenuButton title='Whatsapp' iconName='whatsapp' />
            <MenuButton title='instagram' iconName='instagram' />
            <MenuButton title='waze' iconName='drive' />
            <MenuButton title='email' iconName='email' />
            <MenuButton title='homepage' iconName='home' />
        </Container>
    );
}

export default MainMenu;
