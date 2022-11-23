import React from 'react';
import { Button, Container, Icon } from './SocialMenu.style';

export type SocialMenuProps = {};

export function SocialMenu(props: SocialMenuProps) {
    return (
        <Container
            className='SocialMenu-container'
            data-testid='SocialMenu-container'
        >
            <Button
                href='https://stackoverflow.com/questions/tagged/gdi-cms'
                target='_blank'
            >
                <Icon src='/stack.svg' />
            </Button>
            <Button href='https://discord.gg/egAbyQHRrm' target='_blank'>
                <Icon src='/discord.svg' />
            </Button>
            <Button href='https://twitter.com/use_gdi' target='_blank'>
                <Icon src='/twitter-logo.svg' />
            </Button>
        </Container>
    );
}

export default SocialMenu;
