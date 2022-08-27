import React, { useMemo, useRef } from 'react';
import Fuse from 'fuse.js';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import Masonry from '../Masonry/Masonry';
import TopBar from '../TopBar/TopBar';
import { Container, Content } from './ImageGallery.style';
import { IImage, ImageActionType } from '../../types';
import { ToolId } from '../Tools/Tools.items';
import { Button, Empty } from '@gdi/web-ui';

export type ImageGalleryProps = {
    items: IImage[];
    viewMode: 'full' | 'minimal';
    selectedToolId: string;
    search: string;
    tag: string;
    showTools: boolean;
    selectedIds: string[];
    favoriteIds: string[];
    temporaryIds: string[];
    deletedIds: string[];
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
        onViewChange: (viewId: any) => void;
        onSearch: (search?: string) => void;
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
        showTools,
        selectedIds,
        favoriteIds,
        temporaryIds,
        deletedIds,
        callbacks,
    } = props;
    const ref = useRef<HTMLDivElement>(null);

    const filteredItems = useMemo(() => {
        if (search.length < 2) {
            return items;
        }

        const fuse = new Fuse(items, {
            keys: ['title', 'tags'],
        });

        return fuse.search(search).map((i) => i.item);
    }, [search, items]);

    function onClick(id: string) {
        const item = items.find((i) => i.id === id);

        if (!item) {
            return;
        }

        switch (selectedToolId) {
            case ToolId.select:
                const isSelected = selectedIds.includes(id);
                callbacks.onImageAction(id, isSelected ? 'unselect' : 'select');

                break;
            case ToolId.delete:
                callbacks.onImageAction(id, 'delete');
                break;
            case ToolId.favorite:
                const isFavorite = favoriteIds.includes(id);
                callbacks.onImageAction(
                    id,
                    isFavorite ? 'removeFromFavorites' : 'addToFavorites'
                );
                break;
            case ToolId.temporary:
                const isTemporary = temporaryIds.includes(id);
                callbacks.onImageAction(
                    id,
                    isTemporary ? 'removeFromTemporary' : 'addToTemporary'
                );
                break;
            case ToolId.tag:
                if (!tag) {
                    callbacks.onTagClick('');
                    return;
                }
                const tagExists = item.tags.includes(tag);
                callbacks.onImageAction(
                    id,
                    tagExists ? 'removeTag' : 'addTag',
                    { tag }
                );

                if (!ref.current) {
                    return;
                }

                if (tagExists) {
                    const selector = `.ImageOverlay-container.item-${id} .tag-${tag}`;
                    const el = ref.current.querySelector(selector);
                    if (el) {
                        el.parentNode?.removeChild(el);
                    }
                } else {
                    const selector = `.ImageOverlay-container.item-${id} .Tags-container`;
                    const el = ref.current.querySelector(selector);

                    if (el) {
                        const div = document.createElement('div');
                        div.className = `tag-${tag}`;
                        div.style.backgroundColor = 'paleturquoise';
                        div.style.fontWeight = '500';
                        div.style.fontSize = '16px';
                        div.style.borderRadius = '8px';
                        div.style.padding = '4px 8px';
                        div.style.color = '#333';
                        div.innerText = tag;
                        el.appendChild(div);
                    }
                }
        }
    }

    function onDoubleClick(id: string) {
        switch (selectedToolId) {
            case 'edit':
                callbacks.onImageAction(id, 'edit');
                break;
        }
    }

    function renderOverlay(item: IImage) {
        const isSelected = selectedIds.includes(String(item.id));
        const isFavorite = favoriteIds.includes(String(item.id));
        const isTemporary = temporaryIds.includes(String(item.id));
        const isDeleted = deletedIds.includes(String(item.id));

        return (
            <ImageOverlay
                item={item}
                viewMode={viewMode}
                isSelected={isSelected}
                isFavorite={isFavorite}
                isTemporary={isTemporary}
                isDeleted={isDeleted}
            />
        );
    }

    function renderContent() {
        if (filteredItems.length === 0) {
            return <Empty message='no images' withIcon />;
        }

        return (
            <Masonry
                items={filteredItems}
                columns={columns}
                renderOverlay={renderOverlay}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
            />
        );
    }

    return (
        <Container
            className='ImageGallery-container'
            data-testid='ImageGallery-container'
            ref={ref}
        >
            <TopBar
                selectedToolId={selectedToolId}
                search={search}
                tag={tag}
                viewMode={viewMode}
                showTools={showTools}
                callbacks={callbacks}
            >
                <Button
                    title='Upload'
                    iconName='Add'
                    primary
                    onClick={callbacks.onUploadImage}
                />
            </TopBar>
            <Content>{renderContent()}</Content>
        </Container>
    );
}

export default ImageGallery;
