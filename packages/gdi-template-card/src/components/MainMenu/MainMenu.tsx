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
            <MenuButton title='facebook' url='http://facebook.com' />
            <MenuButton title='linkedin' url='http://linkedin.com' />
            <MenuButton title='Whatsapp' url='http://whatsapp.com' />
            <MenuButton title='instagram' url='http://instagram.com' />
            <MenuButton title='waze' url='http://maps.google.com' />
            <MenuButton title='email' url='http://email.com' />
            <MenuButton title='homepage' url='http://web.com' />
        </Container>
    );
}

export default MainMenu;
