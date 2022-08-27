import { useMemo } from 'react';
import LibraryImages from '../components/LibraryImages/LibraryImages';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { IGalleryViewMode } from '@gdi/store-mixer';
import { ImageActionType } from '@gdi/galleries';
import { ModalImageUploadContainer } from './modals/ModalImageUploadContainer';

type LibraryImagesContainerProps = {
    overwrites?: Json;
    columns?: number;
};

export const LibraryImagesContainer = (props: LibraryImagesContainerProps) => {
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
                    actions.appStateMixer.patch({
                        showImageUploadModal: true,
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
        <LibraryImages
            state={state}
            items={items}
            callbacks={callbacks}
            columns={columns}
        />
    );
};
