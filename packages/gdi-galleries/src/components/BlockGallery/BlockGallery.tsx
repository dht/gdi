import React, { useMemo } from 'react';
import BlockOverlay from '../BlockOverlay/BlockOverlay';
import Fuse from 'fuse.js';
import Masonry, { IItem } from '../Masonry/Masonry';
import TopBar from '../TopBar/TopBar';
import { Container, Content } from './BlockGallery.style';
import { IImageWithBlock } from '@gdi/store-mixer';
import { options } from './BlockGallery.options';
import { Empty, Switch, SwitchOption } from '@gdi/web-ui';

export type BlockGalleryProps = {
    search: string;
    viewMode: string;
    filter: string;
    items: IImageWithBlock[];
    columns?: number;
    callbacks: {
        onSelectBlock: (blockId: string) => void;
        onViewChange: (viewId: string) => void;
        onSearch: (search?: string) => void;
        onFilterChange: (filter: string) => void;
    };
};

export function BlockGallery(props: BlockGalleryProps) {
    const { search, filter, viewMode, callbacks, items, columns = 2 } = props;

    const filteredItems = useMemo(() => {
        if (search.length < 2) {
            return items;
        }

        const fuse = new Fuse(items, {
            keys: ['block.id', 'block.name', 'block.tags'],
        });

        return fuse.search(search).map((i) => i.item);
    }, [search, items]);

    function onClick(id: string) {
        callbacks.onSelectBlock(id);
    }

    function renderOverlay(item: IItem) {
        return (
            <BlockOverlay viewMode={viewMode} item={item as IImageWithBlock} />
        );
    }

    function onFilterChange(option: SwitchOption) {
        callbacks.onFilterChange(option.id);
    }

    function renderContent() {
        if (filteredItems.length === 0) {
            return <Empty message='no blocks' withIcon />;
        }

        return (
            <Masonry
                items={filteredItems}
                columns={columns}
                renderOverlay={renderOverlay}
                onClick={onClick}
            />
        );
    }

    return (
        <Container
            className='BlockGallery-container'
            data-testid='BlockGallery-container'
        >
            <TopBar
                search={search}
                viewMode={viewMode}
                showTools={false}
                callbacks={callbacks}
            >
                <Switch
                    value={filter}
                    options={options}
                    onChange={onFilterChange}
                />
            </TopBar>
            <Content>{renderContent()}</Content>
        </Container>
    );
}

export default BlockGallery;
