import { Button, Search, Tag } from '@gdi/web-ui';
import React from 'react';
import Tools from '../Tools/Tools';
import Views from '../Views/Views';
import { Container, Flex, TagWrapper } from './TopBar.style';

export type TopBarProps = {
    selectedToolId: string;
    search: string;
    viewMode: 'full' | 'minimal';
    tag: string;
    showTools: boolean;
    callbacks: {
        onUploadImage: () => void;
        onSelectTool: (toolId: string) => void;
        onTagClick: (tagId: string) => void;
        onTagClear: () => void;
        onViewChange: (viewId: string) => void;
        onSearch: (search: string) => void;
    };
};

export function TopBar(props: TopBarProps) {
    const { selectedToolId, search, showTools, viewMode, tag, callbacks } =
        props;

    console.log('callbacks ->', callbacks);

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
                            onClick={callbacks.onTagClick}
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
            <Views
                mode={viewMode as string}
                onChange={callbacks.onViewChange}
            />
            <Search value={search} width={300} onChange={callbacks.onSearch} />
        </Container>
    );
}

export default TopBar;
