import React from 'react';
import { Wrapper, WrappedButton } from './BottomBar.style';
import { Icon } from '@gdi/web-ui';

export type BottomBarProps = {};

export function BottomBar(_props: BottomBarProps) {
    return (
        <Wrapper className='BottomBar-wrapper' data-testid='BottomBar-wrapper'>
            <ButtonBarButton iconName='Contact' />
            <ButtonBarButton iconName='ContactCard' />
            <ButtonBarButton iconName='Phone' />
        </Wrapper>
    );
}

export type ButtonBarButtonProps = {
    iconName: string;
};

function ButtonBarButton(props: ButtonBarButtonProps) {
    const { iconName } = props;

    return (
        <WrappedButton>
            <Icon iconName={iconName} />
        </WrappedButton>
    );
}

export default BottomBar;
