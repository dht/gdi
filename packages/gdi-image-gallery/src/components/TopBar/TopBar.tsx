import React from 'react';
import { Button, Search, Tag } from '@gdi/web-ui';
import Tools from '../Tools/Tools';
import Views from '../Views/Views';
import { Container, TagWrapper } from './TopBar.style';

export type TopBarProps = {
    selectedToolId: string;
    search: string;
    viewMode: 'full' | 'minimal';
    tag: string;
    showTools: boolean;
    callbacks: {
        onUploadImage: () => void;
        onSelectTool: (toolId: string) => void;
        onTagClick: (tag: string) => void;
        onTagClear: () => void;
        onViewChange: (viewId: string) => void;
        onSearch: (search?: string) => void;
    };
};

export function TopBar(props: TopBarProps) {
    const { selectedToolId, search, showTools, viewMode, tag, callbacks } =
        props;

    function renderTools() {
        if (!showTools) {
            return null;
        }

        return (
            <>
                <Tools
                    selectedItemId={selectedToolId}
                    onClick={(option) => callbacks.onSelectTool(option.id)}
                />
                <TagWrapper>
                    {tag && (
                        <Tag
                            tag={tag}
                            color='cyan'
                            onClick={() => callbacks.onTagClick(tag)}
                            onDelete={callbacks.onTagClear}
                        />
                    )}
                </TagWrapper>
            </>
        );
    }

    return (
        <Container className='TopBar-container' data-testid='TopBar-container'>
            <Button
                title='Upload Image'
                iconName='Add'
                primary
                onClick={callbacks.onUploadImage}
            />
            {renderTools()}
            <Views mode={viewMode} onChange={callbacks.onViewChange} />
            <Search value={search} width={300} onChange={callbacks.onSearch} />
        </Container>
    );
}

export default TopBar;
