import React, { useCallback, useMemo } from 'react';
import Gallery from '../components/Gallery/Gallery';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { items } from '../components/Gallery/Gallery.items';

type GalleryContainerProps = {
    overwrites?: Json;
    columns?: number;
};

export const GalleryContainer = (props: GalleryContainerProps) => {
    const { overwrites, columns = 4 } = props;
    const dispatch = useDispatch();
    // const items = useSelector(selectors.raw.$rawLibraryImages);
    const galleryState = useSelector(selectors.raw.$rawGalleryState);

    const state = useMemo(() => {
        return {
            ...galleryState,
            ...overwrites,
        };
    }, [galleryState]);

    const callbacks = useMemo(
        () => ({
            onUploadImage: () => {},
            onDeleteImage: (id: string) => {
                console.log('id ->', id);
            },
            onSelectTool: (toolId: string) => {
                dispatch(
                    actions.galleryState.patch({
                        selectedToolId: toolId,
                    })
                );
            },
            onTagClick: (tag: string) => {
                console.log('tag ->', tag);
            },
            onTagClear: () => {
                dispatch(
                    actions.galleryState.patch({
                        tag: '',
                    })
                );
            },
            onViewChange: (viewMode: string) => {
                dispatch(
                    actions.galleryState.patch({
                        mode: viewMode,
                    })
                );
            },
            onSearch: (search: string) => {
                dispatch(
                    actions.galleryState.patch({
                        search,
                    })
                );
            },
            onAddTagToImage: (id: string, tag: string) => {
                console.log('id, tag ->', id, tag);
            },
            onRemoveTagFromImage: (id: string, tag: string) => {
                console.log('id, tag ->', id, tag);
            },
        }),
        []
    );

    return (
        <Gallery
            state={state}
            items={items}
            callbacks={callbacks}
            columns={columns}
        />
    );
};
