import React from 'react';
import { Container, Icon } from './SocialMenu.style';

export type SocialMenuProps = {};

export function SocialMenu(_props: SocialMenuProps) {
    return (
        <Container
            className='SocialMenu-container'
            data-testid='SocialMenu-container'
        >
            <Icon src='/facebook-logo.svg' />
            <Icon src='/twitter-logo.svg' />
        </Container>
    );
}

export default SocialMenu;
