import React from 'react';
import { Container, ContainerButton } from './BottomBar.style';
import { Icon } from '@gdi/web-ui';

export type BottomBarProps = {};

export function BottomBar(_props: BottomBarProps) {
    return (
        <Container
            className='BottomBar-container'
            data-testid='BottomBar-container'
        >
            <ButtonBarButton iconName='Contact' />
            <ButtonBarButton iconName='ContactCard' />
            <ButtonBarButton iconName='Phone' />
        </Container>
    );
}

export type ButtonBarButtonProps = {
    iconName: string;
};

function ButtonBarButton(props: ButtonBarButtonProps) {
    const { iconName } = props;

    return (
        <ContainerButton>
            <Icon iconName={iconName} />
        </ContainerButton>
    );
}

export default BottomBar;
