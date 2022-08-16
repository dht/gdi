import React from 'react';
import {
    Container,
    ContainerItem,
    ContainerNewItem,
} from './MixerVisual.style';
import { SortableList } from '@gdi/web-ui';
import { IElement } from '@gdi/store-mixer';

export type ActionType = 'drillDown' | 'delete' | 'new';

export type MixerVisualProps = {
    currentInstanceId: string;
    pageStructure: IElement[];
    callbacks: {
        onSelectItem: (instanceId: string) => void;
        onMoveItem: (instanceId: string, newOrderValue: number) => void;
        onAction: (actionType: ActionType, id: string) => void;
    };
};

export function MixerVisual(props: MixerVisualProps) {
    const { currentInstanceId, pageStructure, callbacks } = props;

    function renderItem(item: any) {
        const { elementType } = item as IElement;

        const strings = {
            slogan: 'morning',
            h1: 'Wake up each morning to work',
            ctaPrimary: 'Free month',
            ctaSecondary: 'Pricing',
        };

        return <ContainerItem></ContainerItem>;
    }

    function renderNewItem() {
        return <ContainerNewItem>[New element]</ContainerNewItem>;
    }

    const style = {
        zoom: 0.5,
        maxWidth: 1920,
        margin: '0 auto',
    };

    return (
        <Container
            className='MixerVisual-container'
            data-testid='MixerVisual-container'
            style={style}
        >
            <SortableList
                items={pageStructure}
                renderItem={renderItem}
                selectedId={currentInstanceId}
                onMoveItem={callbacks.onMoveItem}
                onSelectItem={callbacks.onSelectItem}
                renderNewItem={renderNewItem}
                onAction={callbacks.onAction}
                isFocused={true}
                disableDragging={true}
            />
        </Container>
    );
}

export default MixerVisual;
