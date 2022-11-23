import React, { useEffect } from 'react';
import { Container, Title, Icon } from './MenuButton.style';
import { icons, IconName } from './MenuButton.icons';
import classnames from 'classnames';

export type MenuButtonProps = {
    iconName?: IconName;
    title: string;
};

export function MenuButton(props: MenuButtonProps) {
    const { title, iconName } = props;

    return (
        <Container
            className='MenuButton-container'
            data-testid='MenuButton-container'
        >
            <MenuButtonIcon iconName={iconName} />
            <Title>{title}</Title>
        </Container>
    );
}

type MenuButtonIconProps = {
    iconName: IconName;
    color: string;
};

export function MenuButtonIcon(props: MenuButtonIconProps) {
    const { iconName, color } = props;

    const iconIndex = icons[iconName];
    const url = `//static-b9ebe.web.app/icons/icon-${iconIndex}.svg`;

    const className = classnames(color);

    return <Icon src={url} className={className} />;
}

export default MenuButton;
