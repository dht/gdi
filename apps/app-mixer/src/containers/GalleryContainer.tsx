import React, { useCallback, useMemo } from 'react';
import Gallery from '../components/Gallery/Gallery';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { IGalleryViewMode } from '@gdi/store-mixer';
import { ImageActionType } from '@gdi/image-gallery';

type GalleryContainerProps = {
    overwrites?: Json;
    columns?: number;
};

export const GalleryContainer = (props: GalleryContainerProps) => {
    const { overwrites, columns = 4 } = props;
    const dispatch = useDispatch();
    const items = useSelector(selectors.base.$libraryImages);
    const galleryState = useSelector(selectors.raw.$rawGalleryState);

    const state = useMemo(() => {
        return {
            ...galleryState,
            ...overwrites,
        };
    }, [galleryState]);

    const callbacks = useMemo(
        () => ({
            onUploadImage: () => {
                dispatch(
                    actions.galleryState.patch({
                        showUploadModal: true,
                    })
                );
            },
            onImageAction: (
                id: string,
                action: ImageActionType,
                data?: Json
            ) => {
                dispatch({
                    type: 'IMAGE_ACTION',
                    actionType: action,
                    id,
                    data,
                });
            },
            onSelectTool: (toolId: string) => {
                dispatch(
                    actions.galleryState.patch({
                        selectedToolId: toolId,
                    })
                );
            },
            onTagClick: (_tag: string) => {
                dispatch(
                    actions.galleryState.patch({
                        showTagModal: true,
                    })
                );
            },
            onTagClear: () => {
                dispatch(
                    actions.galleryState.patch({
                        tag: '',
                    })
                );
            },
            onViewChange: (viewMode: IGalleryViewMode) => {
                dispatch(
                    actions.galleryState.patch({
                        mode: viewMode,
                    })
                );
            },
            onSearch: (search?: string) => {
                dispatch(
                    actions.galleryState.patch({
                        search,
                    })
                );
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
