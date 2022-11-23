import React from 'react';
import { Container, Title } from './MenuButton.style';
import { SocialIcon } from '@gdi/web-ui';

export type MenuButtonProps = {
    url: string;
    title: string;
};

export function MenuButton(props: MenuButtonProps) {
    const { url, title } = props;

    return (
        <Container
            className='MenuButton-container'
            data-testid='MenuButton-container'
        >
            <SocialIcon url={url} />
            <Title>{title}</Title>
        </Container>
    );
}

export default MenuButton;
