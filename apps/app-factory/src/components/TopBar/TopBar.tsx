import React, { useContext } from 'react';
import { Button, IToolbarItem, Tag } from '@gdi/web-ui';
import { LayoutContext } from '../../context/LayoutDesigner.context';
import Tools from '../Tools/Tools';
import { options } from './TopBar.flex';
import { Container, TagWrapper, ToolsWrapper } from './TopBar.style';

export type TopBarProps = {
    selectedToolId?: string;
    search: string;
    viewMode: string;
    tag?: string;
    showTools: boolean;
    children?: JSX.Element;
    callbacks: {
        onViewChange: (viewId: string) => void;
        onSearch: (search?: string) => void;
        onSelectTool?: (toolId: string) => void;
        onTagClick?: (tag: string) => void;
        onTagClear?: () => void;
    };
};

export function TopBar(props: TopBarProps) {
    const context = useContext(LayoutContext);
    const { selectedToolId, search, showTools, viewMode, tag, callbacks } =
        props;

    function onSelectTool(option: IToolbarItem) {
        if (!callbacks.onSelectTool) {
            return;
        }
        callbacks.onSelectTool(option.id);
    }

    function onTagClick() {
        if (!callbacks.onTagClick) {
            return;
        }
        callbacks.onTagClick(tag || '');
    }

    function onTagClear() {
        if (!callbacks.onTagClear) {
            return;
        }
        callbacks.onTagClear();
    }

    function onMenuClick(option: any) {
        console.log('option ->', option);
    }

    function renderTools() {
        if (!showTools) {
            return null;
        }

        return (
            <>
                <Tools selectedItemId={selectedToolId} onClick={onSelectTool} />
                <Button
                    selectedOptionId={'1'}
                    onMenuClick={onMenuClick}
                    options={options}
                    tooltip='Change Flex'
                />

                <TagWrapper>
                    {tag && (
                        <Tag
                            tag={tag}
                            color='cyan'
                            onClick={onTagClick}
                            onDelete={onTagClear}
                        />
                    )}
                </TagWrapper>
            </>
        );
    }

    return (
        <Container className='TopBar-container' data-testid='TopBar-container'>
            {props.children}
            {renderTools()}
        </Container>
    );
}

export default TopBar;
