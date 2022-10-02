import React, { FC, useContext, useRef } from 'react';
import { Container, Content } from './GenericGallery.style';
import GenericOverlay from '../GenericOverlay/GenericOverlay';
import Masonry, { MasonryItemProps } from '../Masonry/Masonry';
import { IGalleryConfig, IGalleryOptions, IImage } from '../../types';
import { Empty } from '@gdi/web-ui';
import {
    GalleryContext,
    GalleryContextProvider,
} from '../../context/Gallery.context';
import { FilterContext } from '../../context/Filter.context';

export type GenericGalleryProps = {
    config: IGalleryConfig;
    options?: Partial<IGalleryOptions>;
    items?: IImage[];
    customItem?: FC<MasonryItemProps>;
    callbacks: {
        onAction: (actionId: string, data?: Json) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
    };
};

export type GenericGalleryInnerProps = {
    items?: IImage[];
    columns?: number;
    customItem?: FC<MasonryItemProps>;
};

export function GenericGalleryInner(props: GenericGalleryInnerProps) {
    const { items = [], customItem } = props;
    const { options, callbacks } = useContext(GalleryContext);
    const filterContext = useContext(FilterContext);
    const { columns } = options;
    const ref = useRef<HTMLDivElement>(null);
    const { data = [] } = filterContext;
    function renderOverlay(item: IImage) {
        // const isSelected = selectedIds.includes(String(item.id));
        const isSelected = true;

        return (
            <GenericOverlay
                item={item}
                viewMode={'full'}
                isSelected={isSelected}
            />
        );
    }

    function renderContent() {
        if (data.length === 0) {
            return <Empty message='no items' withIcon />;
        }

        return (
            <Masonry
                items={data as any[]}
                columns={columns}
                renderOverlay={renderOverlay}
                onClick={callbacks.onClick}
                onDoubleClick={callbacks.onDoubleClick}
                customItem={customItem}
            />
        );
    }

    return (
        <Container
            className='GenericGallery-container'
            data-testid='GenericGallery-container'
            ref={ref}
        >
            <Content>{renderContent()}</Content>
        </Container>
    );
}

export const GenericGallery = (props: GenericGalleryProps) => {
    const { config, items, options, callbacks } = props;

    return (
        <GalleryContextProvider
            config={config}
            options={options as any}
            callbacks={callbacks}
        >
            <GenericGalleryInner items={items} />
        </GalleryContextProvider>
    );
};

export default GenericGallery;
