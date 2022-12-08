import React from 'react';
import {
    Wrapper,
    Flex,
    H1,
    Id,
    SwitchWrapper,
    ToolbarWrapper,
} from './ZoomBuildBar.style';
import { Switch, Toolbar } from '@gdi/web-ui';
import { invokeEvent } from 'shared-base';

export type ZoomBuildBarProps = {
    widget?: IWidget;
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
                invokeEvent('navigateBack');
                break;
            case 'fullscreen':
                invokeEvent('navigate', {
                    path: '/admin/preview/full',
                });
                break;
        }
    }

    return (
        <Wrapper
            className='ZoomBuildBar-wrapper'
            data-testid='ZoomBuildBar-wrapper'
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
        </Wrapper>
    );
}

const switchItems = [
    {
        id: 'web',
        iconName: 'computer',
        text: '',
    },
    {
        id: 'mobile',
        iconName: 'smartphone',
        text: '',
    },
];

const toolbarItems = [
    {
        id: 'back',
        iconName: 'Back',
        text: '',
    },
    {
        id: 'fullscreen',
        iconName: 'FullWidth',
        text: '',
    },
];

export default ZoomBuildBar;
