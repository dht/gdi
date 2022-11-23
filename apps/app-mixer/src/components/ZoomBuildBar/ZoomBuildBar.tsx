import React from 'react';
import {
    Container,
    Flex,
    H1,
    Id,
    SwitchWrapper,
    ToolbarWrapper,
} from './ZoomBuildBar.style';
import { Switch, Toolbar } from '@gdi/web-ui';
import { invokeEvent } from 'shared-base';

export type ZoomBuildBarProps = {
    widget: IWidget;
    mobileMode: boolean;
    onToggleMobile: (value: boolean) => void;
};

export function ZoomBuildBar(props: ZoomBuildBarProps) {
    const { widget, mobileMode } = props;
    const { id, name } = widget ?? {};

    function onToolbarClick(option: IOption) {
        const { id } = option;

        switch (id) {
            case 'back':
                invokeEvent('navigateBack', {});
                break;
        }
    }

    return (
        <Container
            className='ZoomBuildBar-container'
            data-testid='ZoomBuildBar-container'
        >
            <H1>{name}</H1>
            <ToolbarWrapper>
                <Toolbar
                    horizontal
                    items={toolbarItems}
                    onClick={onToolbarClick}
                />
            </ToolbarWrapper>
            <Id>{id}</Id>
            <Flex />
            <SwitchWrapper>
                <Switch
                    value={mobileMode ? 'mobile' : 'web'}
                    onChange={(options) =>
                        props.onToggleMobile(options.id === 'mobile')
                    }
                    options={switchItems}
                />
            </SwitchWrapper>
        </Container>
    );
}

const switchItems = [
    {
        id: 'web',
        iconName: 'computer',
    },
    {
        id: 'mobile',
        iconName: 'smartphone',
    },
];

const toolbarItems = [
    {
        id: 'back',
        iconName: 'Back',
    },
];

export default ZoomBuildBar;
