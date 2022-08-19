import React from 'react';
import { IImage } from '../../types';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import Masonry, { IItem } from '../Masonry/Masonry';
import TopBar from '../TopBar/TopBar';
import { Container, Content } from './ImageGallery.style';

export type ImageGalleryProps = {
    items: IImage[];
    viewMode: 'full' | 'minimal';
    selectedToolId: string;
    search: string;
    tag: string;
    showUploadModal: boolean;
    showTools: boolean;
    selectedIds: string[];
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

export function ImageGallery(props: ImageGalleryProps) {
    const {
        items,
        columns,
        viewMode,
        selectedToolId,
        search,
        tag,
        showUploadModal,
        showTools,
        selectedIds,
        callbacks,
    } = props;

    function renderOverlay(item: IImage) {
        const isSelected = selectedIds.includes(String(item.id));
        return (
            <ImageOverlay
                item={item}
                viewMode={viewMode}
                isSelected={isSelected}
            />
        );
    }

    function renderUploadModal() {
        if (!showUploadModal) {
            return null;
        }

        return <div>upload modal</div>;
    }

    return (
        <Container
            className='ImageGallery-container'
            data-testid='ImageGallery-container'
        >
            <TopBar
                selectedToolId={selectedToolId}
                search={search}
                tag={tag}
                viewMode={viewMode}
                showTools={showTools}
                callbacks={callbacks}
            />
            <Content>
                <Masonry
                    items={items}
                    columns={columns}
                    renderOverlay={renderOverlay}
                />
            </Content>

            {renderUploadModal()}
        </Container>
    );
}

export default ImageGallery;
