import React from 'react';
import { Container } from './Gallery.style';
import { ImageActionType, ImageGallery } from '@gdi/image-gallery';
import { IImage, IGalleryState, IGalleryViewMode } from '@gdi/store-mixer';

export type GalleryProps = {
    items: IImage[];
    state: IGalleryState;
    columns?: number;
    callbacks: {
        onUploadImage: () => void;
        onImageAction: (
            id: string,
            action: ImageActionType,
            data?: Json
        ) => void;
        onSelectTool: (toolId: string) => void;
        onTagClick: (tag: string) => void;
        onTagClear: () => void;
        onViewChange: (viewId: IGalleryViewMode) => void;
        onSearch: (search?: string) => void;
    };
};

export function Gallery(props: GalleryProps) {
    const { items, state, columns, callbacks } = props;

    const {
        mode,
        selectedToolId,
        search,
        tag,
        showUploadModal,
        selectedIds,
        favoriteIds,
        temporaryIds,
        deletedIds,
        showTools,
    } = state;

    return (
        <Container
            className='Gallery-container'
            data-testid='Gallery-container'
        >
            <Container
                className='ImageGallery-container'
                data-testid='ImageGallery-container'
            >
                <ImageGallery
                    items={items}
                    viewMode={mode}
                    selectedToolId={selectedToolId}
                    search={search}
                    tag={tag}
                    showUploadModal={showUploadModal}
                    showTools={showTools}
                    selectedIds={selectedIds}
                    favoriteIds={favoriteIds}
                    temporaryIds={temporaryIds}
                    deletedIds={deletedIds}
                    callbacks={callbacks}
                    columns={columns}
                />
            </Container>
        </Container>
    );
}

export default Gallery;
