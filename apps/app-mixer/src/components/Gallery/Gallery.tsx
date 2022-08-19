import React from 'react';
import { Container } from './Gallery.style';
import { ImageGallery } from '@gdi/image-gallery';
import { IImage, IGalleryState } from '@gdi/store-mixer';

export type GalleryProps = {
    items: IImage[];
    state: IGalleryState;
    columns?: number;
    callbacks: {
        onUploadImage: () => void;
        onDeleteImage: (id: string) => void;
        onSelectTool: (toolId: string) => void;
        onTagClick: (tag: string) => void;
        onTagClear: () => void;
        onViewChange: (viewId: string) => void;
        onSearch: (search: string) => void;
        onAddTagToImage: (id: string, tag: string) => void;
        onRemoveTagFromImage: (id: string, tag: string) => void;
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
        editModalImageId,
        selectedIds,
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
                    callbacks={callbacks}
                    columns={columns}
                />
            </Container>
        </Container>
    );
}

export default Gallery;
