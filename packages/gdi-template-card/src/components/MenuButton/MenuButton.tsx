import React, { useEffect } from 'react';
import { Wrapper, Title, Icon } from './MenuButton.style';
import { icons, IconName } from './MenuButton.icons';
import classnames from 'classnames';

export type MenuButtonProps = {
    title: string;
    color?: string;
    iconName?: IconName;
};

export function MenuButton(props: MenuButtonProps) {
    const { title, iconName, color } = props;

    return (
        <Wrapper
            className='MenuButton-wrapper'
            data-testid='MenuButton-wrapper'
        >
            {iconName && <MenuButtonIcon iconName={iconName} color={color} />}
            <Title>{title}</Title>
        </Wrapper>
    );
}

type MenuButtonIconProps = {
    iconName: IconName;
    color?: string;
};

export function MenuButtonIcon(props: MenuButtonIconProps) {
    const { iconName, color } = props;

    const iconIndex = icons[iconName];
    const url = `//static-b9ebe.web.app/icons/icon-${iconIndex}.svg`;

    const className = classnames(color);

    return <Icon src={url} className={className} />;
}

export default MenuButton;
