import React, { useMemo } from 'react';
import WidgetOverlay from '../WidgetOverlay/WidgetOverlay';
import Fuse from 'fuse.js';
import Masonry, { IItem } from '../Masonry/Masonry';
import TopBar from '../TopBar/TopBar';
import { Container, Content } from './WidgetGallery.style';
import { options } from './WidgetGallery.options';
import { Empty, Switch } from '@gdi/web-ui';

export type WidgetGalleryProps = {
    search: string;
    viewMode: string;
    filter: string;
    items: IImageWithWidget[];
    columns?: number;
    callbacks: {
        onSelectWidget: (widgetId: string) => void;
        onViewChange: (viewId: string) => void;
        onSearch: (search?: string) => void;
        onFilterChange: (filter: string) => void;
    };
};

export function WidgetGallery(props: WidgetGalleryProps) {
    const { search, filter, viewMode, callbacks, items, columns = 2 } = props;

    const filteredItems = useMemo(() => {
        if (search.length < 2) {
            return items;
        }

        const fuse = new Fuse(items, {
            keys: ['widget.id', 'widget.name', 'widget.tags'],
        });

        return fuse.search(search).map((i) => i.item);
    }, [search, items]);

    function onClick(id: string) {
        callbacks.onSelectWidget(id);
    }

    function renderOverlay(item: IItem) {
        return (
            <WidgetOverlay
                viewMode={viewMode}
                item={item as IImageWithWidget}
            />
        );
    }

    function onFilterChange(option: SwitchOption) {
        callbacks.onFilterChange(option.id);
    }

    function renderContent() {
        if (filteredItems.length === 0) {
            return <Empty message='no widgets' withIcon />;
        }

        return (
            <Masonry
                items={filteredItems}
                columns={columns}
                renderOverlay={renderOverlay}
                onClick={onClick}
            />
        );
    }

    return (
        <Container
            className='WidgetGallery-container'
            data-testid='WidgetGallery-container'
        >
            <TopBar
                search={search}
                viewMode={viewMode}
                showTools={false}
                callbacks={callbacks}
            >
                <Switch
                    value={filter}
                    options={options}
                    onChange={onFilterChange}
                />
            </TopBar>
            <Content>{renderContent()}</Content>
        </Container>
    );
}

export default WidgetGallery;
