import React, { FC, useContext, useRef } from 'react';
import GenericOverlay from '../GenericOverlay/GenericOverlay';
import Masonry, { MasonryItemProps } from '../Masonry/Masonry';
import { Wrapper, Content } from './GenericGallery.style';
import { Empty } from '@gdi/web-base-ui';
import { FilterContext } from '../../context/Filter.context';
import {
    IGalleryConfig,
    IGalleryOptions,
    IImage,
    IOverlayConfig,
} from '../../types';
import { SelectionContext } from '../../context/Selection.context';
import {
    GalleryContext,
    GalleryContextProvider,
} from '../../context/Gallery.context';

export type GenericGalleryProps = {
    config: IGalleryConfig;
    configOverlay: IOverlayConfig;
    options?: Partial<IGalleryOptions>;
    items?: IImage[];
    customItem?: FC<MasonryItemProps>;
    callbacks: {
        onAction: (actionId: string, data?: Json) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
    };
};

export type GenericGalleryInnerProps = {
    columns?: number;
    customItem?: FC<MasonryItemProps>;
};

export function GenericGalleryInner(props: GenericGalleryInnerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { customItem } = props;
    const { options, callbacks, config, configOverlay } = useContext(GalleryContext); // prettier-ignore
    const { state: selectedIds, focusedId } = useContext(SelectionContext);
    const filterContext = useContext(FilterContext);
    const { fixedRatio, actionsEmpty } = config;
    const { columns } = options;
    const { data = [] } = filterContext;

    function renderOverlay(item: IImage) {
        const isSelected = selectedIds.includes(String(item.id));

        return (
            <GenericOverlay
                key={item.id}
                config={configOverlay}
                item={item}
                isSelected={isSelected}
                options={options}
            />
        );
    }

    function renderContent() {
        if (data.length === 0) {
            return (
                <Empty
                    message='no items'
                    withIcon
                    actions={actionsEmpty}
                    onAction={callbacks.onAction}
                />
            );
        }

        return (
            <Masonry
                items={data as any[]}
                columns={columns}
                renderOverlay={renderOverlay}
                onClick={callbacks.onClick}
                onDoubleClick={callbacks.onDoubleClick}
                onMouseEvent={callbacks.onMouseEvent}
                customItem={customItem}
                fixedRatio={fixedRatio}
                focusedItemId={focusedId}
            />
        );
    }

    return (
        <Wrapper
            className='GenericGallery-wrapper'
            data-testid='GenericGallery-wrapper'
            ref={ref}
        >
            <Content>{renderContent()}</Content>
        </Wrapper>
    );
}

export const GenericGallery = (props: GenericGalleryProps) => {
    const { config, configOverlay, options, callbacks, customItem } = props;

    return (
        <GalleryContextProvider
            config={config}
            configOverlay={configOverlay}
            options={options as any}
            callbacks={callbacks}
        >
            <GenericGalleryInner customItem={customItem} />
        </GalleryContextProvider>
    );
};

export default GenericGallery;
