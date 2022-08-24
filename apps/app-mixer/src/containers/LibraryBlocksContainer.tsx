import React, { useMemo } from 'react';
import LibraryBlocks from '../components/LibraryBlocks/LibraryBlocks';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { IGalleryViewMode } from '@gdi/store-mixer';
import { IBlocksFilter } from 'packages/gdi-store-mixer/dist/types';

export const LibraryBlocksContainer = () => {
    const dispatch = useDispatch();
    const libraryBlocks = useSelector(selectors.base.$libraryBlocks);
    const galleryState = useSelector(selectors.raw.$rawBlocksGalleryState);

    console.log('libraryBlocks ->', libraryBlocks);

    const callbacks = useMemo(
        () => ({
            onSelectBlock: (blockId: string) => {
                console.log('blockId ->', blockId);
            },
            onViewChange: (viewMode: string) => {
                dispatch(
                    actions.blocksGalleryState.patch({
                        mode: viewMode as IGalleryViewMode,
                    })
                );
            },

            onSearch: (search?: string) => {
                dispatch(
                    actions.blocksGalleryState.patch({
                        search,
                    })
                );
            },
            onFilterChange: (filter: string) => {
                dispatch(
                    actions.blocksGalleryState.patch({
                        filter: filter as IBlocksFilter,
                    })
                );
            },
        }),
        []
    );

    return (
        <LibraryBlocks
            state={galleryState}
            columns={2}
            items={libraryBlocks}
            callbacks={callbacks}
        />
    );
};
