import React from 'react';
import { Container } from './LibraryImages.style';
import { ImageActionType, ImageGallery } from '@gdi/galleries';
import { IGalleryState, IGalleryViewMode } from '@gdi/store-mixer';

export type LibraryImagesProps = {
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
        onViewChange: (viewId: string) => void;
        onSearch: (search?: string) => void;
    };
};

export function LibraryImages(props: LibraryImagesProps) {
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
            className='LibraryImages-container'
            data-testid='LibraryImages-container'
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
    );
}

export default LibraryImages;
