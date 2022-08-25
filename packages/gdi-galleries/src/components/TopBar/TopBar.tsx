import React from 'react';
import { Button, IToolbarItem, Search, Tag } from '@gdi/web-ui';
import Tools from '../Tools/Tools';
import Views from '../Views/Views';
import { Container, TagWrapper } from './TopBar.style';

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

    function renderTools() {
        if (!showTools) {
            return null;
        }

        return (
            <>
                <Tools selectedItemId={selectedToolId} onClick={onSelectTool} />
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
            <Views mode={viewMode} onChange={callbacks.onViewChange} />
            <Search value={search} width={300} onChange={callbacks.onSearch} />
        </Container>
    );
}

export default TopBar;
