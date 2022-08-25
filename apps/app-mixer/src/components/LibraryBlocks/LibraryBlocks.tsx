import React, { useEffect, useRef, useState } from 'react';
import { Container } from './LibraryBlocks.style';
import { IImage, ImageActionType, ImageGallery, Masonry } from '@gdi/galleries';
import { IBlockInfo, Switch, Tag, Tags } from '@gdi/web-ui';
import { IGalleryViewMode, IImageWithBlock } from '@gdi/store-mixer';
import { BlockGallery } from '@gdi/galleries';
import { IBlocksGalleryState } from 'packages/gdi-store-mixer/dist/types';

export type LibraryBlocksProps = {
    state: IBlocksGalleryState;
    items: IImageWithBlock[];
    columns?: number;
    callbacks: {
        onSelectBlock: (blockId: string) => void;
        onViewChange: (viewId: string) => void;
        onSearch: (search?: string) => void;
        onFilterChange: (filter: string) => void;
    };
};

export function LibraryBlocks(props: LibraryBlocksProps) {
    const { items, callbacks, state } = props;
    const { search, filter, mode } = state;

    return (
        <Container
            className='LibraryBlocks-container'
            data-testid='LibraryBlocks-container'
        >
            <BlockGallery
                search={search}
                filter={filter}
                viewMode={mode}
                callbacks={callbacks}
                items={items}
            />
        </Container>
    );
}

export default LibraryBlocks;
